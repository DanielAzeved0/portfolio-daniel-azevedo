// Paleta de cores e estilos do tema

export const COLORS = {
  // Cores principais
  dark: '#333333',        // Cinza quase preto
  light: '#E0E0E0',       // Cinza claro
  primary: '#4A90E2',     // Azul moderno suave
  secondary: '#00B0FF',   // Azul ciano vibrante
  white: '#FFFFFF',
  
  // Opacidades
  darkOpacity: (opacity: number) => `rgba(51, 51, 51, ${opacity})`,
  lightOpacity: (opacity: number) => `rgba(224, 224, 224, ${opacity})`,
  primaryOpacity: (opacity: number) => `rgba(74, 144, 226, ${opacity})`,
  secondaryOpacity: (opacity: number) => `rgba(0, 176, 255, ${opacity})`,
};

// Classes Tailwind reutilizáveis
export const BUTTON_STYLES = {
  primary: 'px-8 py-3 bg-[var(--accent-secondary)] text-white rounded-full font-semibold hover:bg-[var(--accent-primary)] hover:shadow-lg transition-all',
  outline: 'px-8 py-3 border-2 border-[var(--accent-primary)] bg-[var(--background)] text-[var(--foreground)] rounded-full font-semibold hover:bg-white hover:border-[var(--accent-secondary)] hover:shadow-lg transition-all',
  ghost: 'flex items-center gap-2 px-6 py-3 bg-transparent border border-[var(--background)] rounded-full text-[var(--background)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all',
};

export const SECTION_STYLES = {
  title: 'text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 text-[var(--accent-primary)]',
  container: 'py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8',
  card: 'bg-white p-8 rounded-2xl border border-[rgba(51,51,51,0.1)] shadow-lg',
};
