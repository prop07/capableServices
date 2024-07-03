import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface ContactEmailTemplateProps {
    firstName: string;
    phone:string;
    email:string;
    serviceType:string;
    address:string;
    date:string;
    message:string;
  }
  
  
  
  export const ContactEmailTemplate = ({
    firstName,phone,email,serviceType,address,date,message
  }: ContactEmailTemplateProps) => (
    <Html>
    <Head />
    <Preview>{serviceType}  {date}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img
            src={`https://capable-services.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f170472a.png&w=1200&q=75`}
            width="120"
            height="50"
            alt="Slack"
          />
        </Section>
        <Heading style={h1}>Hi,{firstName}</Heading>
        <Text style={heroText}>
          Your Request Details are below.
        </Text>

        <Section style={codeBox}>
          <Text style={confirmationCodeText}>Name: {firstName}</Text>
          <Text style={confirmationCodeText}>Phone: {phone}</Text>
          <Text style={confirmationCodeText}>Service: {serviceType}</Text>
          <Text style={confirmationCodeText}>Address: {address}</Text>
          <Text style={confirmationCodeText}>Date: {date}</Text>
          <Text style={confirmationCodeText}>Email: {email}</Text>
          <Text style={confirmationCodeText}>Message: {message}</Text>
        </Section>

        <Text style={text}>
          If you didn't request this email, there's nothing to worry about, you
          can safely ignore it.
        </Text>

        <Section>
          <Row style={footerLogos}>
            <Column style={{ width: "66%" }}>
            </Column>
            <Column>
              <Section>
                <Row>
                  <Column>
                    <Link href="/">
                      <Img
                        src={`https://capable-services.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f170472a.png&w=1200&q=75`}
                        width="32"
                        height="32"
                        alt="Slack"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="/">
                      <Img
                        src={`https://capable-services.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f170472a.png&w=1200&q=75`}
                        width="32"
                        height="32"
                        alt="Slack"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="/">
                      <Img
                        src={`https://capable-services.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f170472a.png&w=1200&q=75`}
                        width="32"
                        height="32"
                        alt="Slack"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                </Row>
              </Section>
            </Column>
          </Row>
        </Section>

        <Section>
          <Link
            style={footerLink}
            href="https://slackhq.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our blog
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://slack.com/legal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Policies
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://slack.com/help"
            target="_blank"
            rel="noopener noreferrer"
          >
           Website
          </Link>
          <Text style={footerText}>
            ©2022 Capable Services, LLC, a Salesforce company. <br />
            500 Howard Street, San Francisco, CA 94105, USA <br />
            <br />
            All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
  );
  

  
  export default ContactEmailTemplate;
  
  const footerText = {
    fontSize: "12px",
    color: "#b7b7b7",
    lineHeight: "15px",
    textAlign: "left" as const,
    marginBottom: "50px",
  };
  
  const footerLink = {
    color: "#b7b7b7",
    textDecoration: "underline",
  };
  
  const footerLogos = {
    marginBottom: "32px",
    paddingLeft: "8px",
    paddingRight: "8px",
    width: "100%",
  };
  
  const socialMediaIcon = {
    display: "inline",
    marginLeft: "32px",
    objectFit:"contain",
  };
  
  const main = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  };
  
  const container = {
    margin: "0 auto",
    padding: "0px 20px",
  };
  
  const logoContainer = {
    marginTop: "32px",
    objectFit:"contain",
  };
  
  const h1 = {
    color: "#1d1c1d",
    fontSize: "34px",
    fontWeight: "700",
    margin: "30px 0",
    padding: "0",
    lineHeight: "42px",
  };
  
  const heroText = {
    fontSize: "20px",
    lineHeight: "28px",
    marginBottom: "30px",
  };
  
  const codeBox = {
    background: "rgb(245, 244, 245)",
    borderRadius: "4px",
    marginBottom: "30px",
    padding: "30px 20px",
  };
  
  const confirmationCodeText = {
    fontSize: "16px",
    verticalAlign: "middle",
  };
  
  const text = {
    color: "#000",
    fontSize: "14px",
    lineHeight: "24px",
  };