module.exports = {
  name: "MyWebClass.org",
  description: "A digital museum of design styles",
  url: process.env.SITE_URL || "https://mywebclass.org",
  language: "en",
  author: {
    name: "MyWebClass Team",
    email: "hello@mywebclass.org"
  },
  supabase: {
    url: process.env.VITE_SUPABASE_URL,
    anonKey: process.env.VITE_SUPABASE_ANON_KEY
  }
};
