import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://phbdzyjxkgvavdzdhjcj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoYmR6eWp4a2d2YXZkemRoamNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3MzE4MzgsImV4cCI6MjAwNjMwNzgzOH0.5LNZlvE543SYd0A-S6H8xiQke-wQy1fZWWUIXsEL0DM'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase