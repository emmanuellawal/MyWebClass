import { describe, it } from 'node:test';
import assert from 'node:assert';
import { buildQueryUrl, projectId, dataset, apiVersion } from '../src/_data/sanity.mjs';

describe('sanity.mjs', () => {
  describe('configuration exports', () => {
    it('should export projectId with default value', () => {
      assert.ok(projectId, 'projectId should be defined');
      assert.strictEqual(typeof projectId, 'string');
    });

    it('should export dataset with default value', () => {
      assert.ok(dataset, 'dataset should be defined');
      assert.strictEqual(typeof dataset, 'string');
    });

    it('should export apiVersion as 2021-10-21', () => {
      assert.strictEqual(apiVersion, '2021-10-21');
    });
  });

  describe('buildQueryUrl', () => {
    it('should build a valid Sanity API URL', () => {
      const query = '*[_type == "designStyle"]';
      const url = buildQueryUrl(query);

      assert.ok(url.startsWith('https://'), 'URL should start with https://');
      assert.ok(url.includes('.api.sanity.io'), 'URL should include Sanity API domain');
      assert.ok(url.includes('/data/query/'), 'URL should include query endpoint');
    });

    it('should URL-encode the query parameter', () => {
      const query = '*[_type == "test" && status == "approved"]';
      const url = buildQueryUrl(query);

      // The query should be URL-encoded (spaces become %20, == becomes %3D%3D, etc.)
      assert.ok(!url.includes(' '), 'URL should not contain unencoded spaces');
      assert.ok(url.includes(encodeURIComponent(query)), 'URL should contain encoded query');
    });

    it('should include projectId in the URL', () => {
      const url = buildQueryUrl('*');
      assert.ok(url.includes(projectId), 'URL should include projectId');
    });

    it('should include dataset in the URL', () => {
      const url = buildQueryUrl('*');
      assert.ok(url.includes(dataset), 'URL should include dataset');
    });

    it('should include apiVersion in the URL path', () => {
      const url = buildQueryUrl('*');
      assert.ok(url.includes(`/v${apiVersion}/`), 'URL should include API version');
    });

    it('should handle special characters in queries', () => {
      const query = '*[_type == "gallerySubmission" && status == "approved"]{..., styleRef->}';
      const url = buildQueryUrl(query);

      // Should not throw and should produce valid URL
      assert.ok(url.length > 0, 'URL should be generated');
      new URL(url); // This will throw if URL is invalid
    });
  });
});
