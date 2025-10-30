"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { MessageCircle, Rocket, TrendingUp, Users, Zap, Twitter, Github, Instagram } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Features", id: "feature" },
            { name: "Metrics", id: "metric" },
            { name: "Community", id: "testimonial" },
            { name: "FAQ", id: "faq" }
          ]}
          brandName="MoonCoin"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="🚀 TO THE MOON AND BEYOND! 🚀"
          description="Join the wildest meme coin revolution! MoonCoin is here to blast off to astronomical gains while having maximum fun along the way. Buckle up, diamond hands! 💎"
          tag="NEXT BIG MEME"
          tagIcon={Rocket}
          buttons={[
            { text: "Buy MoonCoin Now", href: "#contact" },
            { text: "Join Community", href: "#testimonial" }
          ]}
          imageSrc="https://images.pexels.com/photos/7527909/pexels-photo-7527909.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="MoonCoin rocket blasting to the moon"
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Why MoonCoin is INSANE! 🔥"
          description="We're not just another meme coin - we're a lifestyle, a movement, a rocket ship to financial freedom!"
          tag="FEATURES"
          tagIcon={Zap}
          features={[
            {
              title: "Rocket Fast Transactions ⚡",
              description: "Lightning speed transactions that make other coins look like they're moving backwards in time!",
              imageSrc: "https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lightning fast rocket"
            },
            {
              title: "Diamond Hand Rewards 💎",
              description: "Hold longer, earn crazier rewards! Our staking system literally prints money for diamond hands!",
              imageSrc: "https://images.pexels.com/photos/6765248/pexels-photo-6765248.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Golden diamond coins"
            },
            {
              title: "Meme Community Power 🚀",
              description: "The most savage, hilarious, and supportive crypto community in the entire galaxy!",
              imageSrc: "https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Celebrating community"
            }
          ]}
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="INSANE Numbers That'll Blow Your Mind! 🤯"
          description="These stats are so crazy they need their own rocket ship!"
          tag="EPIC STATS"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "10,000%",
              description: "Potential Moon Shot Gains"
            },
            {
              id: "2",
              value: "420K+",
              description: "Diamond Hand Holders"
            },
            {
              id: "3",
              value: "69M+",
              description: "Memes Created Daily"
            },
            {
              id: "4",
              value: "1B+",
              description: "Laughs Generated"
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTwo
          title="The Legends Behind MoonCoin 🎯"
          description="Meet the absolute madlads who turned memes into moon missions!"
          tag="DREAM TEAM"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Meme Master Max",
              role: "Chief Rocket Officer",
              description: "Former NASA engineer turned meme lord. Built rockets, now builds generational wealth through epic memes!",
              imageSrc: "https://images.pexels.com/photos/7653460/pexels-photo-7653460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/memeMasterMax" }
              ]
            },
            {
              id: "2",
              name: "Diamond Dev Sarah",
              role: "Blockchain Wizard",
              description: "Coded her first smart contract at 12. Now she codes money printers for diamond hands!",
              imageSrc: "https://images.pexels.com/photos/5483155/pexels-photo-5483155.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Github, url: "https://github.com/diamonddevsarah" }
              ]
            },
            {
              id: "3",
              name: "Viral Victor",
              role: "Meme Marketing King",
              description: "Made 50 million people laugh in one day. Now he makes MoonCoin the most viral crypto ever!",
              imageSrc: "https://images.pexels.com/photos/13883855/pexels-photo-13883855.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/viralvictor" }
              ]
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Moon Riders Are Saying! 🗣️"
          description="Real people, real gains, real excitement about MoonCoin!"
          tag="TESTIMONIALS"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "CryptoKing42",
              role: "Diamond Hand Legend",
              company: "Moon Squad",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6972784/pexels-photo-6972784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "RocketQueen99",
              role: "Meme Millionaire",
              company: "HODL Gang",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2228570/pexels-photo-2228570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "ToTheMoon777",
              role: "Lambo Dreamer",
              company: "Future Rich Club",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8382223/pexels-photo-8382223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "DiamondHands420",
              role: "Rocket Fuel Expert",
              company: "Moon Mission Crew",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7520765/pexels-photo-7520765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Got Questions? We've Got EPIC Answers! 🤔"
          sideDescription="Everything you need to know about joining the most insane meme coin adventure ever!"
          faqs={[
            {
              id: "1",
              title: "What makes MoonCoin different from other meme coins?",
              content: "MoonCoin isn't just a coin - it's a rocket ship to financial freedom powered by the most epic meme community in crypto! We have actual utility, insane rewards, and enough memes to fuel a trip to Mars!"
            },
            {
              id: "2",
              title: "How do I buy MoonCoin?",
              content: "Easy! Just connect your wallet, swap your boring coins for MoonCoin, and prepare for liftoff! We support all major wallets and exchanges. Buying MoonCoin is easier than making a meme!"
            },
            {
              id: "3",
              title: "What are the tokenomics?",
              content: "We've got the most diamond-handed tokenomics in the game! Low supply, high demand, crazy rewards for holders, and enough burn mechanisms to send the price to Jupiter!"
            },
            {
              id: "4",
              title: "When Lambo?",
              content: "Soon™! But seriously, our roadmap is packed with partnerships, exchange listings, and world domination plans. Hold tight and enjoy the rocket ride to financial freedom!"
            },
            {
              id: "5",
              title: "Is this just another rug pull?",
              content: "Absolutely NOT! Our team is fully doxxed, liquidity is locked forever, and we're building for the long haul. We're here to create generational wealth, not quick exits!"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Join the Moon Mission? 🚀"
          description="Get your rocket fuel ready! Fill out this form and we'll send you exclusive access to presale, VIP community perks, and insider moon mission updates!"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Astronaut Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Moon Mail Address",
              required: true
            },
            {
              name: "wallet",
              type: "text",
              placeholder: "Your Wallet Address (Optional)",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us why you deserve to be on this rocket ship to the moon! 🌙",
            rows: 5,
            required: true
          }}
          buttonText="Launch to Moon! 🚀"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="MoonCoin"
          columns={[
            {
              items: [
                { label: "About", href: "about" },
                { label: "Features", href: "feature" },
                { label: "Roadmap", href: "#" }
              ]
            },
            {
              items: [
                { label: "Community", href: "testimonial" },
                { label: "Team", href: "team" },
                { label: "Partners", href: "#" }
              ]
            },
            {
              items: [
                { label: "Buy MoonCoin", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Support", href: "#" }
              ]
            },
            {
              items: [
                { label: "Twitter", href: "https://twitter.com/mooncoin" },
                { label: "Discord", href: "https://discord.gg/mooncoin" },
                { label: "Telegram", href: "https://t.me/mooncoin" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}