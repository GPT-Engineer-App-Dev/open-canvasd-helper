import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from "react";

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const queryClient = new QueryClient();

export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

export function useSupabaseQuery(key, queryFn, options) {
    return useQuery(key, queryFn, {
        ...options,
        onError: (error) => {
            console.error("Error fetching data:", error);
        },
    });
}

export function useSupabaseMutation(mutationFn, options) {
    return useMutation(mutationFn, {
        ...options,
        onError: (error) => {
            console.error("Error performing mutation:", error);
        },
    });
}

export async function fetchEvents() {
    const { data, error } = await supabase.from('events').select('*');
    if (error) throw new Error(error.message);
    return data;
}

export async function addEvent(event) {
    const { data, error } = await supabase.from('events').insert([event]);
    if (error) throw new Error(error.message);
    return data;
}

// Include the new code under
