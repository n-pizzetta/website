import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import './index.css'
import { FiMenu, FiX } from 'react-icons/fi'

const words = ["Chat", "Fast", "Fied"];

function SimpleApp() {
  const [currentWord, setCurrentWord] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Navbar>
        <LogoContainer>
          <LogoImage src="/verichat-icon-nobg-1200.png" alt="VeriChat Logo" />
          <Logo>VeriChat</Logo>
        </LogoContainer>
        
        <DesktopNavLinks>
          <NavLink>Accueil</NavLink>
          <NavLink>Fonctionnalités</NavLink>
          <NavLink>Tarifs</NavLink>
          <NavLink>À propos</NavLink>
          <NavButton>Commencer</NavButton>
        </DesktopNavLinks>
        
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </MobileMenuButton>
        
        {mobileMenuOpen && (
          <MobileNavLinks>
            <NavLink onClick={() => setMobileMenuOpen(false)}>Accueil</NavLink>
            <NavLink onClick={() => setMobileMenuOpen(false)}>Fonctionnalités</NavLink>
            <NavLink onClick={() => setMobileMenuOpen(false)}>Tarifs</NavLink>
            <NavLink onClick={() => setMobileMenuOpen(false)}>À propos</NavLink>
            <NavButton onClick={() => setMobileMenuOpen(false)}>Commencer</NavButton>
          </MobileNavLinks>
        )}
      </Navbar>
      
      <Hero>
        <HeroContent>
          <TextAnimation>
            <StaticText>Veri</StaticText>
            <AnimatePresence mode="wait">
              <motion.span
                key={words[currentWord]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="dynamic-text"
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
          </TextAnimation>
          <HeroSubtitle>
            Le chatbot factchecker qui vérifie chaque information
          </HeroSubtitle>
          <HeroDescription>
            Une solution IA facile à intégrer sur votre site web ou application pour garantir des informations précises et vérifiées.
          </HeroDescription>
          <ButtonGroup>
            <PrimaryButton>Essayer gratuitement</PrimaryButton>
            <SecondaryButton>En savoir plus</SecondaryButton>
          </ButtonGroup>
        </HeroContent>
        <HeroImageWrapper>
          <HeroImageGlow />
          <HeroImage src="/phone-with-content-removebg-preview.png" alt="VeriChat illustration" />
        </HeroImageWrapper>
      </Hero>
      
      <Features>
        <SectionTitle>Pourquoi choisir VeriChat ?</SectionTitle>
        <FeatureGrid>
          <FeatureCard>
            <FeatureIconContainer>
              <FeatureIcon>🔍</FeatureIcon>
            </FeatureIconContainer>
            <FeatureTitle>Vérification en temps réel</FeatureTitle>
            <FeatureDescription>
              Notre IA analyse et vérifie les informations instantanément pendant les conversations.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIconContainer>
              <FeatureIcon>🔄</FeatureIcon>
            </FeatureIconContainer>
            <FeatureTitle>Intégration facile</FeatureTitle>
            <FeatureDescription>
              Quelques lignes de code suffisent pour intégrer VeriChat à votre plateforme existante.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIconContainer>
              <FeatureIcon>📊</FeatureIcon>
            </FeatureIconContainer>
            <FeatureTitle>Analyse détaillée</FeatureTitle>
            <FeatureDescription>
              Recevez des rapports détaillés sur la véracité des informations partagées.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIconContainer>
              <FeatureIcon>🛡️</FeatureIcon>
            </FeatureIconContainer>
            <FeatureTitle>Protection contre la désinformation</FeatureTitle>
            <FeatureDescription>
              Protégez vos utilisateurs des fausses informations et maintenez un environnement fiable.
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Features>

      <Footer>
        <FooterContent>
          <FooterLogo>
            <LogoImage src="/verichat-icon-nobg-1200.png" alt="VeriChat Logo" small />
            <FooterLogoText>VeriChat</FooterLogoText>
          </FooterLogo>
          <FooterLinks>
            <FooterLinkColumn>
              <FooterLinkHeader>Produit</FooterLinkHeader>
              <FooterLink>Fonctionnalités</FooterLink>
              <FooterLink>Intégrations</FooterLink>
              <FooterLink>Cas d'utilisation</FooterLink>
            </FooterLinkColumn>
            <FooterLinkColumn>
              <FooterLinkHeader>Ressources</FooterLinkHeader>
              <FooterLink>Documentation</FooterLink>
              <FooterLink>Guides</FooterLink>
              <FooterLink>API</FooterLink>
            </FooterLinkColumn>
            <FooterLinkColumn>
              <FooterLinkHeader>Entreprise</FooterLinkHeader>
              <FooterLink>À propos</FooterLink>
              <FooterLink>Blog</FooterLink>
              <FooterLink>Nous contacter</FooterLink>
            </FooterLinkColumn>
          </FooterLinks>
        </FooterContent>
        <FooterBottom>
          <Copyright>© 2025 VeriChat. Tous droits réservés.</Copyright>
        </FooterBottom>
      </Footer>
    </Container>
  );
}

// Styles
const Container = styled.div`
  max-width: 100%;
  min-height: 100vh;
  background-color: #101114;
  color: #FFFFFF;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  background-color: rgba(16, 17, 20, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoImage = styled.img`
  height: ${props => props.small ? '30px' : '40px'};
  width: auto;
  object-fit: contain;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #F2D049;
`;

const DesktopNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLinks = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #101114;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

const NavLink = styled.a`
  color: #E0E0E0;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: #F2D049;
  }
`;

const NavButton = styled.button`
  background-color: #F2D049;
  color: #101114;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #DAB82C;
    transform: translateY(-2px);
  }
`;

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 4rem;
  gap: 3rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 10% 10%, rgba(77, 157, 224, 0.1), transparent 40%),
                radial-gradient(circle at 90% 90%, rgba(242, 208, 73, 0.08), transparent 40%);
    pointer-events: none;
  }
  
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 4rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  position: relative;
  z-index: 2;
`;

const TextAnimation = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  
  .dynamic-text {
    color: #F2D049;
  }
  
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
    gap: 0.2rem;
  }
`;

const StaticText = styled.span`
  color: #FFFFFF;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #E0E0E0;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: #9CA3AF;
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    
    button {
      width: 100%;
    }
  }
`;

const PrimaryButton = styled.button`
  background-color: #F2D049;
  color: #101114;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #DAB82C;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.button`
  background-color: transparent;
  color: #F2D049;
  border: 1px solid #F2D049;
  border-radius: 4px;
  padding: 0.8rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(242, 208, 73, 0.15);
    transform: translateY(-2px);
  }
`;

const HeroImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const HeroImageGlow = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  background: radial-gradient(circle, rgba(242, 208, 73, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
`;

const HeroImage = styled.img`
  max-width: 80%;
  max-height: 600px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
  object-fit: contain;
  
  @media (max-width: 1024px) {
    max-width: 70%;
    max-height: 500px;
  }
  
  @media (max-width: 768px) {
    max-width: 90%;
    max-height: 400px;
  }
`;

const Features = styled.section`
  padding: 7rem 4rem;
  background-color: #181a20;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #181a20, transparent);
  }
  
  @media (max-width: 768px) {
    padding: 5rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 3.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #F2D049;
    border-radius: 2px;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeatureCard = styled.div`
  background-color: #21232c;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  }
`;

const FeatureIconContainer = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(242, 208, 73, 0.15);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const FeatureIcon = styled.div`
  font-size: 1.8rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  color: #FFFFFF;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #9CA3AF;
  line-height: 1.6;
`;

const Footer = styled.footer`
  background-color: #101114;
  padding: 5rem 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 2rem 1.5rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FooterLogoText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #F2D049;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 4rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FooterLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLinkHeader = styled.h4`
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: #9CA3AF;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #F2D049;
  }
`;

const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #9CA3AF;
  text-align: center;
`;

export default SimpleApp