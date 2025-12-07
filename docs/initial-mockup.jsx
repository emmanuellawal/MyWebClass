import { useState } from 'react';

const MyWebClassMockup = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [adminTab, setAdminTab] = useState('pending');

  const designStyles = [
    {
      id: 'swiss',
      name: 'Swiss International Style',
      era: '1950s–1970s',
      thumbnail: '🇨🇭',
      color: '#E53935',
      description: 'Clean grids, sans-serif typography, and objective photography.',
      origin: 'Developed in Switzerland during the 1950s, this style emphasized cleanliness, readability, and objectivity.',
      characteristics: ['Grid-based layouts', 'Sans-serif typefaces (Helvetica, Univers)', 'Asymmetric compositions', 'Mathematical precision'],
      status: 'approved'
    },
    {
      id: 'bauhaus',
      name: 'Bauhaus',
      era: '1919–1933',
      thumbnail: '🔺',
      color: '#1E88E5',
      description: 'Form follows function. Primary colors, geometric shapes, clean lines.',
      origin: 'Founded by Walter Gropius in Weimar, Germany, Bauhaus unified crafts and fine arts.',
      characteristics: ['Primary colors (red, blue, yellow)', 'Geometric shapes', 'Functional design', 'Sans-serif typography'],
      status: 'approved'
    },
    {
      id: 'brutalist',
      name: 'Brutalism',
      era: '2014–present (web)',
      thumbnail: '▓',
      color: '#212121',
      description: 'Raw, unpolished aesthetics. Exposed structure, monospace fonts, stark contrast.',
      origin: 'Inspired by Brutalist architecture, web brutalism emerged as a reaction to polished, homogeneous design.',
      characteristics: ['Raw HTML aesthetics', 'Monospace typography', 'High contrast', 'Intentional "ugliness"'],
      status: 'approved'
    },
    {
      id: 'flat',
      name: 'Flat Design',
      era: '2012–present',
      thumbnail: '◼',
      color: '#00BCD4',
      description: 'Minimalist approach using simple 2D elements without gradients or shadows.',
      origin: 'Popularized by Microsoft Metro and iOS 7, flat design prioritizes usability and clarity.',
      characteristics: ['No shadows or gradients', 'Bold colors', 'Simple iconography', 'Focus on typography'],
      status: 'pending'
    },
  ];

  const submissions = [
    { id: 1, name: 'Alex Chen', email: 'alex@njit.edu', style: 'Swiss', url: 'https://alexchen.github.io/swiss-demo', status: 'pending', date: '2025-01-14' },
    { id: 2, name: 'Jordan Smith', email: 'jsmith@njit.edu', style: 'Bauhaus', url: 'https://jsmith.github.io/bauhaus', status: 'approved', date: '2025-01-12' },
    { id: 3, name: 'Sam Rivera', email: 'srivera@njit.edu', style: 'Brutalist', url: 'https://samr.github.io/brutal', status: 'rejected', date: '2025-01-10' },
  ];

  const NavBar = () => (
    <nav className="bg-white border-b-2 border-black sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => { setCurrentPage('home'); setSelectedStyle(null); }}
          >
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <span className="font-bold text-lg">MyWebClass</span>
              <span className="text-neutral-400">.org</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <button 
              onClick={() => { setCurrentPage('home'); setSelectedStyle(null); }}
              className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-black' : 'text-neutral-400 hover:text-black'}`}
            >
              Gallery
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`text-sm font-medium transition-colors ${currentPage === 'about' ? 'text-black' : 'text-neutral-400 hover:text-black'}`}
            >
              About
            </button>
            <button 
              onClick={() => setCurrentPage('submit')}
              className={`text-sm font-medium transition-colors ${currentPage === 'submit' ? 'text-black' : 'text-neutral-400 hover:text-black'}`}
            >
              Submit
            </button>
            <button 
              onClick={() => setCurrentPage('admin')}
              className={`text-sm font-medium transition-colors ${currentPage === 'admin' ? 'text-black' : 'text-neutral-400 hover:text-black'}`}
            >
              Instructor
            </button>
            <button 
              onClick={() => setCurrentPage('submit')}
              className="px-4 py-2 bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              Submit Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const CookieBanner = () => (
    showCookieBanner && (
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-6 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-8">
          <div className="flex-1">
            <h4 className="font-bold mb-1">Cookie Consent</h4>
            <p className="text-sm text-neutral-300">
              We use cookies to analyze site usage and improve your experience. 
              Analytics are only loaded after you consent. 
              <a href="#" className="underline ml-1">Privacy Policy</a>
            </p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setShowCookieBanner(false)}
              className="px-4 py-2 border border-white text-sm hover:bg-white hover:text-black transition-colors"
            >
              Preferences
            </button>
            <button 
              onClick={() => setShowCookieBanner(false)}
              className="px-4 py-2 border border-white text-sm hover:bg-white hover:text-black transition-colors"
            >
              Reject All
            </button>
            <button 
              onClick={() => setShowCookieBanner(false)}
              className="px-4 py-2 bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    )
  );

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">Design Education Platform</p>
              <h1 className="text-6xl font-bold leading-tight mb-6">
                Learn design history
                <br />
                through <span className="text-red-500">real examples</span>.
              </h1>
              <p className="text-xl text-neutral-300 max-w-xl mb-8">
                Explore authentic implementations of iconic design movements. 
                From Swiss modernism to digital brutalism — see how principles 
                become practice.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-white text-black font-medium hover:bg-neutral-200 transition-colors">
                  Explore Gallery
                </button>
                <button 
                  onClick={() => setCurrentPage('submit')}
                  className="px-6 py-3 border border-white font-medium hover:bg-white hover:text-black transition-colors"
                >
                  Submit Your Demo
                </button>
              </div>
            </div>
            <div className="col-span-4 flex items-center justify-center">
              {/* Decorative Swiss-style element */}
              <div className="relative w-48 h-48">
                <div className="absolute top-0 left-0 w-24 h-24 bg-red-500"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 border-2 border-white"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-4">
          {[
            { number: '12+', label: 'Design Styles' },
            { number: '50+', label: 'Student Demos' },
            { number: '100%', label: 'Authentic' },
            { number: 'Free', label: 'Education' },
          ].map((stat, i) => (
            <div key={i} className="p-8 border-r border-black last:border-r-0 text-center">
              <span className="text-4xl font-bold block">{stat.number}</span>
              <span className="text-sm text-neutral-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-sm text-neutral-400 tracking-widest uppercase">Browse</span>
              <h2 className="text-4xl font-bold mt-2">Design Style Gallery</h2>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-black text-white text-sm">All Styles</button>
              <button className="px-4 py-2 border border-black text-sm hover:bg-black hover:text-white transition-colors">Modernist</button>
              <button className="px-4 py-2 border border-black text-sm hover:bg-black hover:text-white transition-colors">Contemporary</button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {designStyles.filter(s => s.status === 'approved').map((style) => (
              <article 
                key={style.id}
                onClick={() => { setSelectedStyle(style); setCurrentPage('detail'); }}
                className="border-2 border-black cursor-pointer group hover:shadow-lg transition-shadow"
              >
                {/* Thumbnail */}
                <div 
                  className="h-48 flex items-center justify-center text-6xl"
                  style={{ backgroundColor: style.color + '20' }}
                >
                  {style.thumbnail}
                </div>
                
                {/* Info */}
                <div className="p-6 border-t-2 border-black">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold group-hover:text-neutral-600 transition-colors">
                      {style.name}
                    </h3>
                    <span className="text-xs text-neutral-400 bg-neutral-100 px-2 py-1">
                      {style.era}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500 mb-4">{style.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-red-600">View Demo →</span>
                    <div 
                      className="w-4 h-4"
                      style={{ backgroundColor: style.color }}
                    ></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-neutral-100 py-16 border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Learn', desc: 'Study the history and principles of each design style' },
              { step: '02', title: 'Build', desc: 'Create an authentic demo implementing those principles' },
              { step: '03', title: 'Submit', desc: 'Share your demo with explanation of authenticity' },
              { step: '04', title: 'Publish', desc: 'Get approved and featured in our gallery' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <span className="text-5xl font-bold text-neutral-200 block mb-4">{item.step}</span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to contribute?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Submit your own design style demo and become part of our educational archive.
          </p>
          <button 
            onClick={() => setCurrentPage('submit')}
            className="px-8 py-4 bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
          >
            Submit Your Demo
          </button>
        </div>
      </section>
    </div>
  );

  const DetailPage = () => (
    selectedStyle && (
      <div>
        {/* Header */}
        <section className="border-b-2 border-black">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <button 
              onClick={() => { setCurrentPage('home'); setSelectedStyle(null); }}
              className="text-sm text-neutral-500 hover:text-black mb-4 block"
            >
              ← Back to Gallery
            </button>
            <div className="flex justify-between items-end">
              <div>
                <span className="text-sm text-neutral-400 tracking-widest uppercase">{selectedStyle.era}</span>
                <h1 className="text-5xl font-bold mt-2">{selectedStyle.name}</h1>
              </div>
              <div 
                className="w-16 h-16"
                style={{ backgroundColor: selectedStyle.color }}
              ></div>
            </div>
          </div>
        </section>

        {/* Demo Preview */}
        <section className="border-b-2 border-black">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-sm text-neutral-400 tracking-widest uppercase mb-6">Live Demo</h2>
            <div 
              className="h-96 border-2 border-black flex items-center justify-center"
              style={{ backgroundColor: selectedStyle.color + '10' }}
            >
              <div className="text-center">
                <span className="text-8xl block mb-4">{selectedStyle.thumbnail}</span>
                <p className="text-neutral-500">Interactive {selectedStyle.name} Demo</p>
                <button className="mt-4 px-6 py-2 bg-black text-white text-sm">
                  Open Full Demo ↗
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-12 gap-12">
              {/* Main Content */}
              <div className="col-span-8">
                <h2 className="text-2xl font-bold mb-6">Origins & History</h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  {selectedStyle.origin}
                </p>
                
                <h2 className="text-2xl font-bold mb-6">Key Characteristics</h2>
                <ul className="space-y-3 mb-8">
                  {selectedStyle.characteristics.map((char, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div 
                        className="w-2 h-2 mt-2"
                        style={{ backgroundColor: selectedStyle.color }}
                      ></div>
                      <span className="text-neutral-600">{char}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold mb-6">Why This Demo Is Authentic</h2>
                <p className="text-neutral-600 leading-relaxed">
                  This implementation faithfully recreates the {selectedStyle.name} through 
                  careful attention to typography, grid systems, color usage, and compositional 
                  principles documented in the original movement. Every design decision 
                  is grounded in historical research.
                </p>
              </div>

              {/* Sidebar */}
              <div className="col-span-4">
                <div className="bg-neutral-100 p-6 sticky top-24">
                  <h3 className="font-bold mb-4">Style Guide</h3>
                  
                  <div className="mb-6">
                    <span className="text-xs text-neutral-400 uppercase tracking-wider">Color Palette</span>
                    <div className="flex gap-2 mt-2">
                      <div className="w-8 h-8 bg-black"></div>
                      <div className="w-8 h-8 bg-white border border-black"></div>
                      <div className="w-8 h-8" style={{ backgroundColor: selectedStyle.color }}></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs text-neutral-400 uppercase tracking-wider">Typography</span>
                    <p className="mt-2 font-bold">Helvetica Neue</p>
                    <p className="text-sm text-neutral-500">Sans-serif, clean</p>
                  </div>

                  <div>
                    <span className="text-xs text-neutral-400 uppercase tracking-wider">Grid</span>
                    <p className="mt-2 text-sm text-neutral-600">12-column grid with 24px gutters</p>
                  </div>

                  <button className="w-full mt-6 py-3 bg-black text-white text-sm font-medium">
                    Download Style Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  );

  const SubmitPage = () => (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Submit Your Demo</h1>
        <p className="text-neutral-500">
          Share your design style implementation with the community.
          All submissions are reviewed by instructors before publishing.
        </p>
      </div>

      {submissionStatus === 'success' ? (
        <div className="bg-green-50 border-2 border-green-500 p-8 text-center">
          <span className="text-4xl block mb-4">✓</span>
          <h2 className="text-2xl font-bold text-green-700 mb-2">Submission Received!</h2>
          <p className="text-green-600 mb-6">
            Your demo has been submitted for review. You'll receive an email 
            when it's approved.
          </p>
          <button 
            onClick={() => { setSubmissionStatus(null); setCurrentPage('home'); }}
            className="px-6 py-2 bg-green-600 text-white font-medium"
          >
            Back to Gallery
          </button>
        </div>
      ) : (
        <form 
          onSubmit={(e) => { e.preventDefault(); setSubmissionStatus('success'); }}
          className="space-y-6"
        >
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Design Style <span className="text-red-500">*</span>
            </label>
            <select 
              required
              className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
            >
              <option value="">Select a style...</option>
              <option value="swiss">Swiss International Style</option>
              <option value="bauhaus">Bauhaus</option>
              <option value="brutalist">Brutalism</option>
              <option value="flat">Flat Design</option>
              <option value="minimalist">Minimalism</option>
              <option value="other">Other (specify in description)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Demo URL <span className="text-red-500">*</span>
            </label>
            <input 
              type="url" 
              required
              className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="https://yourusername.github.io/demo"
            />
            <p className="text-xs text-neutral-400 mt-1">Must be a publicly accessible URL (GitHub Pages, Netlify, etc.)</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Screenshot <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-black p-8 text-center cursor-pointer hover:bg-neutral-50 transition-colors">
              <span className="text-4xl block mb-2">📷</span>
              <p className="text-sm text-neutral-500">Click to upload or drag and drop</p>
              <p className="text-xs text-neutral-400 mt-1">PNG, JPG up to 5MB</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Authenticity Explanation <span className="text-red-500">*</span>
            </label>
            <textarea 
              required
              rows={5}
              className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              placeholder="Explain how your demo authentically represents the design style. Reference specific typography, color, layout, and compositional choices..."
            />
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" required className="mt-1" id="consent" />
            <label htmlFor="consent" className="text-sm text-neutral-600">
              I confirm this is my original work and I consent to having it 
              published on MyWebClass.org if approved. I agree to the{' '}
              <a href="#" className="underline">Terms of Service</a> and{' '}
              <a href="#" className="underline">Privacy Policy</a>.
            </label>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-black text-white font-medium hover:bg-neutral-800 transition-colors"
          >
            Submit for Review
          </button>
        </form>
      )}
    </div>
  );

  const AdminPage = () => (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Instructor Dashboard</h1>
          <p className="text-neutral-500">Review and manage student submissions</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-neutral-400">Logged in as: instructor@njit.edu</span>
          <button className="px-4 py-2 border border-black text-sm">Logout</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b-2 border-black">
        {[
          { key: 'pending', label: 'Pending Review', count: 1 },
          { key: 'approved', label: 'Approved', count: 1 },
          { key: 'rejected', label: 'Rejected', count: 1 },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setAdminTab(tab.key)}
            className={`px-6 py-3 text-sm font-medium border-b-2 -mb-0.5 transition-colors ${
              adminTab === tab.key 
                ? 'border-black bg-black text-white' 
                : 'border-transparent hover:bg-neutral-100'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Submissions Table */}
      <div className="border-2 border-black">
        <table className="w-full">
          <thead className="bg-neutral-100 border-b-2 border-black">
            <tr>
              <th className="text-left p-4 text-sm font-medium">Submitter</th>
              <th className="text-left p-4 text-sm font-medium">Style</th>
              <th className="text-left p-4 text-sm font-medium">Date</th>
              <th className="text-left p-4 text-sm font-medium">Status</th>
              <th className="text-left p-4 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions
              .filter(s => s.status === adminTab)
              .map(submission => (
              <tr key={submission.id} className="border-b border-neutral-200 last:border-b-0">
                <td className="p-4">
                  <p className="font-medium">{submission.name}</p>
                  <p className="text-sm text-neutral-400">{submission.email}</p>
                </td>
                <td className="p-4">{submission.style}</td>
                <td className="p-4 text-sm text-neutral-500">{submission.date}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-xs font-medium ${
                    submission.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    submission.status === 'approved' ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {submission.status.toUpperCase()}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <a 
                      href={submission.url} 
                      target="_blank"
                      className="px-3 py-1 border border-black text-xs hover:bg-black hover:text-white transition-colors"
                    >
                      View Demo
                    </a>
                    {submission.status === 'pending' && (
                      <>
                        <button className="px-3 py-1 bg-green-600 text-white text-xs hover:bg-green-700 transition-colors">
                          Approve
                        </button>
                        <button className="px-3 py-1 bg-red-600 text-white text-xs hover:bg-red-700 transition-colors">
                          Reject
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {submissions.filter(s => s.status === adminTab).length === 0 && (
          <div className="p-12 text-center text-neutral-400">
            No submissions in this category
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4 mt-8">
        {[
          { label: 'Total Submissions', value: '3' },
          { label: 'Pending Review', value: '1' },
          { label: 'Published', value: '4' },
          { label: 'This Week', value: '2' },
        ].map((stat, i) => (
          <div key={i} className="bg-neutral-100 p-6">
            <span className="text-3xl font-bold block">{stat.value}</span>
            <span className="text-sm text-neutral-500">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">About MyWebClass.org</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-neutral-600 leading-relaxed mb-8">
          MyWebClass.org is a design education platform that teaches the history 
          and practice of visual design through authentic, fully-implemented website demos.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
        <p className="text-neutral-600 leading-relaxed mb-6">
          We believe the best way to learn design is by seeing real examples. 
          Not just screenshots or mockups, but living, breathing implementations 
          that demonstrate how design principles become functional websites.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">For Students</h2>
        <p className="text-neutral-600 leading-relaxed mb-6">
          Explore our gallery to understand how design movements like Swiss 
          International Style, Bauhaus, and Brutalism translate to the web. 
          Then, submit your own demos to demonstrate your understanding.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">For Educators</h2>
        <p className="text-neutral-600 leading-relaxed mb-6">
          Use MyWebClass.org as a teaching resource. Our instructor tools 
          allow you to review student submissions, provide feedback, and 
          curate the gallery.
        </p>

        <div className="bg-neutral-100 p-8 mt-12">
          <h3 className="font-bold mb-4">Contact</h3>
          <p className="text-neutral-600">
            Questions? Reach out at{' '}
            <a href="mailto:info@mywebclass.org" className="underline">info@mywebclass.org</a>
          </p>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="text-black font-bold">M</span>
              </div>
              <span className="font-bold">MyWebClass.org</span>
            </div>
            <p className="text-sm text-neutral-400">
              Teaching design history through authentic implementation.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Gallery</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white">Swiss Style</a></li>
              <li><a href="#" className="hover:text-white">Bauhaus</a></li>
              <li><a href="#" className="hover:text-white">Brutalism</a></li>
              <li><a href="#" className="hover:text-white">All Styles</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white">Submit Demo</a></li>
              <li><a href="#" className="hover:text-white">Style Guides</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex justify-between items-center text-sm text-neutral-400">
          <span>© 2025 MyWebClass.org — NJIT S373 Project</span>
          <span>Built with Eleventy + Sanity</span>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <NavBar />
      
      <main className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'detail' && <DetailPage />}
        {currentPage === 'submit' && <SubmitPage />}
        {currentPage === 'admin' && <AdminPage />}
        {currentPage === 'about' && <AboutPage />}
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default MyWebClassMockup;
