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
  primary: 'px-8 py-3 bg-[#00B0FF] text-white rounded-full font-semibold hover:bg-[#4A90E2] hover:shadow-lg hover:shadow-[#00B0FF]/50 transition-all',
  outline: 'px-8 py-3 border-2 border-[#4A90E2] bg-[#F5F5F5] text-[#333333] rounded-full font-semibold hover:bg-white hover:border-[#00B0FF] hover:shadow-lg transition-all',
  ghost: 'flex items-center gap-2 px-6 py-3 bg-transparent border border-[#E0E0E0] rounded-full text-[#E0E0E0] hover:border-[#4A90E2] hover:text-[#4A90E2] transition-all',
};

export const SECTION_STYLES = {
  title: 'text-4xl font-bold text-center mb-12 text-[#4A90E2]',
  container: 'py-20 px-4 sm:px-6 lg:px-8',
  card: 'bg-white p-8 rounded-2xl border border-[#333333]/10 shadow-lg',
};
