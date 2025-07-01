
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pyryjjrniomdhtnbecrw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5cnlqanJuaW9tZGh0bmJlY3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMDY4NzQsImV4cCI6MjA2Njg4Mjg3NH0.kgGrbDkI60MUMn0od-9YXflVoMDPYRFpaCUbMGP29K4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
