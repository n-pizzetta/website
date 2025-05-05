import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import './App.css'

const words = ["Chat", "Fast", "Fied"];

function App() {
  const [currentWord, setCurrentWord] = useState(0);
  
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
        <NavLinks>
          <NavLink>Accueil</NavLink>
          <NavLink>Fonctionnalités</NavLink>
          <NavLink>Tarifs</NavLink>
          <NavLink>À propos</NavLink>
          <NavButton>Commencer</NavButton>
        </NavLinks>
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
  )
}

// Styles
const Container = styled.div`
  max-width: 100%;
  min-height: 100vh;
  background-color: var(--background-dark);
  color: var(--text-light);
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
  color: var(--primary-color);
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: var(--text-medium);
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const NavButton = styled.button`
  background-color: var(--primary-color);
  color: var(--background-dark);
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(242, 208, 73, 0.3);
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
    color: var(--primary-color);
  }
`;

const StaticText = styled.span`
  color: var(--text-light);
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  color: var(--text-medium);
  margin-bottom: 1.5rem;
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const PrimaryButton = styled.button`
  background-color: var(--primary-color);
  color: var(--background-dark);
  border: none;
  border-radius: 4px;
  padding: 0.8rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(242, 208, 73, 0.3);
  }
`;

const SecondaryButton = styled.button`
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  padding: 0.8rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-light);
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
  max-width: 80%; /* Réduit de 100% à 80% pour diminuer la largeur */
  max-height: 600px; /* Définit une hauteur maximale */
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
  object-fit: contain; /* Conserve les proportions de l'image */
  
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
  background-color: var(--background-medium);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, var(--background-medium), transparent);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--text-light);
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
    background-color: var(--primary-color);
    border-radius: 2px;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
`;

const FeatureCard = styled.div`
  background-color: var(--background-light);
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
  background-color: var(--primary-light);
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
  color: var(--text-light);
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
`;

const Footer = styled.footer`
  background-color: var(--background-dark);
  padding: 5rem 4rem 2rem;
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
  color: var(--primary-color);
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 4rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

const FooterLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLinkHeader = styled.h4`
  color: var(--text-light);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: var(--text-muted);
  text-align: center;
`;

export default App
