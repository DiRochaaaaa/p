import React, { useEffect } from 'react';
import { ShieldCheck, Package, CreditCard, Clock, Star, Heart, Check, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';
import PriceCard from './components/PriceCard';
import Feature from './components/Feature';
import Testimonial from './components/Testimonial';
import UsageStep from './components/UsageStep';

function App() {
  // Função para ativar animações ao scroll
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Ativar para elementos visíveis no carregamento inicial
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-red-50 via-white to-purple-50">
      {/* Elementos decorativos de fundo global */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Padrão de dots com gradiente */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 right-0 h-full bg-dots-pattern bg-repeat bg-[length:30px_30px]"></div>
        </div>
        
        {/* Gradiente fluido animado */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-red-400 to-purple-400 blur-3xl animate-blob"></div>
          <div className="absolute -bottom-[40%] -right-[40%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-[20%] right-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Linhas decorativas */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        </div>
      </div>
      
      {/* Hero Section - Mais chamativa */}
      <div className="relative overflow-hidden py-8 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-100 via-purple-50 to-transparent opacity-40" />
        
        {/* Elementos decorativos animados */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full blur-xl animate-pulse opacity-60" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl animate-pulse opacity-60" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-pink-200 rounded-full blur-3xl animate-pulse opacity-30" />
        
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 flex flex-col">
              <div className="inline-flex items-center bg-white/30 backdrop-blur-md text-red-800 px-4 py-2 rounded-full mb-4 animate-pulse shadow-glass self-start">
                <Star className="h-4 w-4 mr-2" /> Proteção Garantida
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-tight gradient-text slide-in-left">
                Descubra o Poder dos 7 Nós: Sua Proteção Diária
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 slide-in-left" style={{ animationDelay: '0.2s' }}>
                Há séculos, a Pulseira dos 7 Nós tem sido um símbolo de proteção e equilíbrio. 
                Cada nó é amarrado com uma intenção específica, criando um poderoso escudo energético 
                que acompanha você em todos os momentos.
              </p>

              {/* Imagem para Mobile */}
              <div className="lg:hidden w-full mb-6 slide-in-right">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                  <img 
                    src="https://leitura.tarodosanjos.online/wp-content/uploads/2025/03/7e78949d-01f0-4e74-b1d3-c7e24e37562c.png"
                    alt="Pulseira 7 Nós"
                    className="w-full max-w-xs mx-auto relative drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6 slide-in-left" style={{ animationDelay: '0.4s' }}>
                <Feature icon={ShieldCheck} text="Proteção contra energias negativas" />
                <Feature icon={Star} text="Escudo contra inveja" />
                <Feature icon={Star} text="Equilíbrio energético" />
                <Feature icon={Heart} text="Harmonia e bem-estar" />
              </div>
              
              <a 
                href="#pricing" 
                className="bg-gradient-to-r from-red-600 to-purple-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-red-700 hover:to-purple-700 transition-colors slide-in-left flex items-center justify-center shadow-glow-red" 
                style={{ animationDelay: '0.6s' }}
              >
                Quero Minha Proteção Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            {/* Imagem para Desktop */}
            <div className="hidden lg:block lg:w-1/2 slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                <img 
                  src="https://leitura.tarodosanjos.online/wp-content/uploads/2025/03/7e78949d-01f0-4e74-b1d3-c7e24e37562c.png"
                  alt="Pulseira 7 Nós"
                  className="w-full max-w-md mx-auto relative drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section - Melhorada */}
      <div className="container mx-auto px-4 max-w-6xl py-16 relative z-10">
        {/* Decoração de fundo da seção */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-red-200 to-transparent rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-purple-200 to-transparent rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <h2 className="font-display text-3xl font-bold text-center mb-6 gradient-text reveal">
          Por que a Pulseira dos 7 Nós é Especial?
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 reveal">
          Cada nó da pulseira é amarrado com uma intenção específica, criando um poderoso campo 
          de proteção ao seu redor. É mais que um acessório - é um escudo energético pessoal.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-glass hover:shadow-xl transition-shadow reveal relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-200 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute top-6 right-6 bg-white/70 backdrop-blur-md rounded-full p-2 shadow-md">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4 mt-2">Proteção Energética</h3>
            <p className="text-gray-700 relative z-10">
              Os 7 nós trabalham em harmonia para criar uma barreira protetora contra energias 
              densas e influências negativas, mantendo você protegido em todos os momentos.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-red-600 mt-4 rounded-full"></div>
          </div>
          
          <div className="bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-glass hover:shadow-xl transition-shadow reveal relative overflow-hidden group" style={{ transitionDelay: '0.2s' }}>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-200 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute top-6 right-6 bg-white/70 backdrop-blur-md rounded-full p-2 shadow-md">
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4 mt-2">Equilíbrio Energético</h3>
            <p className="text-gray-700 relative z-10">
              Cada nó é um ponto de ancoragem para energias positivas, ajudando a manter seu 
              campo energético equilibrado e harmonioso em qualquer situação.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mt-4 rounded-full"></div>
          </div>
          
          <div className="bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-glass hover:shadow-xl transition-shadow reveal relative overflow-hidden group" style={{ transitionDelay: '0.4s' }}>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-pink-200 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute top-6 right-6 bg-white/70 backdrop-blur-md rounded-full p-2 shadow-md">
              <Sparkles className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4 mt-2">Harmonia e Bem-estar</h3>
            <p className="text-gray-700 relative z-10">
              A cor vermelha da pulseira amplifica sua energia vital, trazendo mais disposição 
              e vitalidade para seu dia, promovendo bem-estar completo.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mt-4 rounded-full"></div>
          </div>
        </div>

        {/* How to Use Section */}
        <div className="mb-16 relative">
          {/* Decoração de fundo da seção */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-purple-50 to-red-50 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute inset-0 bg-dots-pattern-2 bg-repeat opacity-5"></div>
          </div>
          
          <h2 className="font-display text-3xl font-bold text-center mb-12 gradient-text reveal">
            Como Usar Sua Pulseira dos 7 Nós
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <UsageStep 
                number={1}
                title="Preparação"
                description="Escolha um momento tranquilo do dia para colocar sua pulseira pela primeira vez."
              />
            </div>
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <UsageStep 
                number={2}
                title="Intenção"
                description="Respire fundo e mentalize sua intenção de proteção ao colocar a pulseira."
              />
            </div>
            <div className="reveal" style={{ transitionDelay: '0.3s' }}>
              <UsageStep 
                number={3}
                title="Ativação"
                description="Toque cada um dos 7 nós, agradecendo pela proteção que cada um representa."
              />
            </div>
            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <UsageStep 
                number={4}
                title="Uso Diário"
                description="Use sua pulseira diariamente no pulso esquerdo para máxima proteção."
              />
            </div>
          </div>
        </div>

        {/* Testimonials - Melhorado */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-purple-100 opacity-50 rounded-3xl -z-10" />
          <div className="absolute inset-0 bg-dots-pattern bg-repeat bg-[length:20px_20px] opacity-5 rounded-3xl -z-10" />
          
          <h2 className="font-display text-3xl font-bold text-center mb-12 gradient-text reveal pt-8">
            Histórias de Transformação
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            <Testimonial 
              name="Maria S."
              text="Desde que comecei a usar a pulseira, minha energia mudou completamente. Me sinto mais protegida e confiante!"
              delay={0.1}
            />
            <Testimonial 
              name="João P."
              text="Incrível como algo aparentemente simples pode fazer tanta diferença. Uso há 3 meses e não tiro mais!"
              delay={0.3}
            />
            <Testimonial 
              name="Ana C."
              text="Comprei para toda minha família. A diferença na energia da nossa casa é notável. Recomendo muito!"
              delay={0.5}
            />
          </div>
        </div>

        {/* Pricing */}
        <div id="pricing" className="scroll-mt-20 relative">
          {/* Decoração de fundo da seção */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-200 to-transparent rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-transparent rounded-full blur-3xl opacity-30"></div>
            <div className="absolute inset-0 bg-dots-pattern bg-repeat bg-[length:15px_15px] opacity-5"></div>
          </div>
          
          <h2 className="font-display text-3xl font-bold text-center mb-6 gradient-text reveal">
            Escolha a Proteção Ideal para Você
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 reveal">
            Selecione o kit que melhor atende às suas necessidades e comece sua jornada de proteção energética hoje mesmo.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <PriceCard
              title="Kit Individual"
              originalPrice={197.00}
              price={97.00}
              description="Sua proteção pessoal com uma pulseira dos 7 nós. Ideal para começar sua jornada de proteção."
              shipping="Frete Grátis para todo Brasil"
              quantity={1}
              buyLink="https://seguro.tarodosanjos.online/r/OKZV3FZ0HC"
            />
            <PriceCard
              title="Kit Família"
              originalPrice={297.00}
              price={174.97}
              description="Proteção para toda família com 3 pulseiras dos 7 nós. Ideal para proteger quem você ama."
              shipping="Frete Grátis para todo Brasil"
              bonus="+ Guia Digital de Proteção Energética"
              recommended={true}
              quantity={3}
              buyLink="https://seguro.tarodosanjos.online/b/51DIGRKVISCG"
            />
            <PriceCard
              title="Kit Premium"
              originalPrice={397.00}
              price={247.00}
              description="Proteção completa com 5 pulseiras dos 7 nós. Ideal para famílias maiores ou para presentear."
              shipping="Frete Grátis para todo Brasil"
              bonus="+ Guia Digital + Consulta Energética Online"
              quantity={5}
              buyLink="https://seguro.tarodosanjos.online/b/ON0N421FQ0GS"
            />
          </div>
          
          {/* Garantia e Segurança */}
          <div className="bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-glass max-w-4xl mx-auto mb-16 reveal relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-red-50 to-purple-50 opacity-30 rounded-xl" />
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-200 rounded-full opacity-20" />
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-purple-200 rounded-full opacity-20" />
            
            <h3 className="font-display text-2xl font-bold text-center mb-6 gradient-text">Compre com Total Segurança</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center md:text-left bg-white/50 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <ShieldCheck className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="font-display text-xl font-bold gradient-text">Garantia de Satisfação</h4>
                </div>
                <p className="text-gray-600">
                  Oferecemos 30 dias de garantia. Se não estiver completamente satisfeito, 
                  devolvemos seu dinheiro sem perguntas.
                </p>
              </div>
              
              <div className="text-center md:text-left bg-white/50 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-display text-xl font-bold gradient-text">Compra 100% Segura</h4>
                </div>
                <p className="text-gray-600">
                  Pagamento processado em ambiente seguro. 
                  Aceitamos cartões de crédito, boleto e Pix.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 reveal">
          <div className="flex items-center space-x-2 bg-white/40 backdrop-blur-md p-3 rounded-lg shadow-glass">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <span className="text-gray-700">Compra 100% Segura</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/40 backdrop-blur-md p-3 rounded-lg shadow-glass">
            <CreditCard className="h-5 w-5 text-green-600" />
            <span className="text-gray-700">Pagamento Facilitado</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/40 backdrop-blur-md p-3 rounded-lg shadow-glass">
            <Clock className="h-5 w-5 text-green-600" />
            <span className="text-gray-700">Entrega Ultra Rápida</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/40 backdrop-blur-md p-3 rounded-lg shadow-glass">
            <Check className="h-5 w-5 text-green-600" />
            <span className="text-gray-700">Satisfação Garantida</span>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16 relative">
          {/* Decoração de fundo da seção */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-red-50 to-purple-50 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute inset-0 bg-dots-pattern-2 bg-repeat opacity-5"></div>
          </div>
          
          <h2 className="font-display text-3xl font-bold text-center mb-12 gradient-text reveal">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-glass reveal">
              <h3 className="font-display text-xl font-bold mb-3">Como a Pulseira dos 7 Nós funciona?</h3>
              <p className="text-gray-600">
                A pulseira trabalha com a energia dos 7 nós, cada um representando uma intenção de proteção. 
                Ao usar a pulseira, você cria um campo energético protetor ao seu redor, bloqueando energias 
                negativas e atraindo vibrações positivas.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-glass reveal" style={{ transitionDelay: '0.2s' }}>
              <h3 className="font-display text-xl font-bold mb-3">Quanto tempo dura a pulseira?</h3>
              <p className="text-gray-600">
                Com os cuidados adequados, a Pulseira dos 7 Nós pode durar muitos anos. Recomendamos evitar 
                contato com água e produtos químicos para preservar sua energia e aparência.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-glass reveal" style={{ transitionDelay: '0.4s' }}>
              <h3 className="font-display text-xl font-bold mb-3">Posso usar mais de uma pulseira?</h3>
              <p className="text-gray-600">
                Sim! Muitas pessoas usam mais de uma pulseira para amplificar a proteção ou para focar em 
                diferentes aspectos da vida que desejam proteger.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-16 reveal relative">
          {/* Decoração de fundo da seção */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-purple-50 to-red-50 rounded-full blur-3xl opacity-30"></div>
          </div>
          
          <h2 className="font-display text-3xl font-bold mb-6 gradient-text">
            Sua Proteção Está a Um Clique de Distância
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Não deixe para depois. Comece agora sua jornada de proteção e equilíbrio energético 
            com a Pulseira dos 7 Nós.
          </p>
          <a 
            href="#pricing" 
            className="inline-flex items-center bg-gradient-to-r from-red-600 to-purple-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-red-700 hover:to-purple-700 transition-colors scale-in shadow-glow-red"
          >
            Garantir Minha Proteção
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 to-purple-600 text-white py-12 relative z-10">
        <div className="absolute inset-0 bg-dots-pattern bg-repeat bg-[length:20px_20px] opacity-5"></div>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-display text-2xl font-bold mb-2">Converse com Jesus®</h3>
              <p className="text-white/80">Sua proteção energética diária</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Contato</a>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <div className="grid gap-2">
              <p className="text-white/70">&copy; {new Date().getFullYear()} Converse com Jesus®. Todos os direitos reservados.</p>
              <p className="text-white/70">CNPJ: 49.365.551/0001-48</p>
              <p className="text-white/70">Artemi LTDA</p>
              <p className="text-white/70">Avenida Industrial 1120 A, Distrito Industrial</p>
              <p className="text-white/70">Governador Valadares - MG, CEP: 35040-610</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;