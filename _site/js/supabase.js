import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = document.querySelector('meta[name="supabase-url"]')?.content || '';
const supabaseKey = document.querySelector('meta[name="supabase-key"]')?.content || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function insertSubmission(data) {
  const { data: result, error } = await supabase
    .from('gallery_submissions')
    .insert([{
      name: data.name,
      email: data.email,
      style_name: data.styleName,
      style_slug: data.styleSlug,
      demo_url: data.demoUrl,
      screenshot_url: data.screenshotUrl,
      explanation: data.explanation,
      status: 'submitted'
    }])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return result;
}

export async function getSubmissions(status = null) {
  let query = supabase
    .from('gallery_submissions')
    .select('*')
    .order('created_at', { ascending: false });

  if (status) {
    query = query.eq('status', status);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data;
}

export async function updateSubmissionStatus(id, status, notes = null) {
  const updateData = {
    status,
    updated_at: new Date().toISOString()
  };

  if (notes) {
    updateData.reviewer_notes = notes;
  }

  const { data, error } = await supabase
    .from('gallery_submissions')
    .update(updateData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function trackAnalytics(eventType, metadata = {}) {
  const consentGiven = localStorage.getItem('analytics-consent') === 'true';

  if (!consentGiven) {
    return;
  }

  const { error } = await supabase
    .from('analytics_events')
    .insert([{
      event_type: eventType,
      page_url: window.location.pathname,
      user_id: getOrCreateUserId(),
      metadata
    }]);

  if (error) {
    console.error('Analytics error:', error);
  }
}

function getOrCreateUserId() {
  let userId = localStorage.getItem('user-id');
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('user-id', userId);
  }
  return userId;
}
