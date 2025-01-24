declare module '*.jsx' {
    const content: any;
    export default content;
  }

  declare module '*.mjs' {
    const content: any;
    export default content;
  }
  declare module '@/pages/Dashboard.jsx' {
    export const userContext: React.Context<any>;
  }
  