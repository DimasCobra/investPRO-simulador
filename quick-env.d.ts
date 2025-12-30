/// <reference types="vite/client" />

/**
 * This file is used to provide type definitions for Vite's environment variables 
 * and to handle module declarations for libraries that might not have built-in types.
 * 
 * Note: Redundant declarations for 'react', 'recharts', and 'lucide-react' 
 * were removed as they conflicted with the actual types provided by the packages.
 */

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}