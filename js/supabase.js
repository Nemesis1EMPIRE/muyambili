// Configuration Supabase - Remplace avec tes propres credentials
const SUPABASE_URL = 'https://epykntfsojewzhkiyobn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVweWtudGZzb2pld3poa2l5b2JuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5OTU5OTQsImV4cCI6MjA3OTU3MTk5NH0.sOY0pBvfjvLlP4hjyUkf5u2UWVju-6PBy0nz-Vzv4dk';

// Initialisation Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export { supabase };
