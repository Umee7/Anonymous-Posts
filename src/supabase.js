import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    'https://unpntgwzsrzqtamyjdci.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucG50Z3d6c3J6cXRhbXlqZGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwMzMxMTIsImV4cCI6MjAwMDYwOTExMn0.hhyYcwCeHGYdvwsy8UE-JcULh-M4R4v-qvJU5lxyr74'
)
export {supabase}