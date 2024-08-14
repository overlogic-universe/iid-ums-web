import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Tailwind,
  } from "@react-email/components";
  import * as React from "react";
  import image from "@/assets/images/emailSenderImage/header-2.png";
  interface EmailTemplateProps {
    name: string;
  }
  
  export const CompetitionEmailTemplate = ({ name }: EmailTemplateProps) => {
    const previewText = `Thank you ${name} for filling out the registration form`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans px-2">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
              <Section className="mt-[32px]">
                <Img
                  src={`https://ums-iid.com${image.src}`}
                  alt="UMS International Innovation Day 2024"
                  className="my-0 mx-auto w-full rounded-lg"
                />
              </Section>
              <Text className="text-black text-[14px] leading-[24px]">
                Halo {name},
              </Text>
              <Text>
                Thank you for your participation in UMS International Innovation
                Day 2024! We are pleased to confirm that your registration has
                been successful.
              </Text>
              <Text>
                After successfully registering, We will check the files that you
                have registered, therefore please wait for further confirmation
                from the Committee in the form of an LoA which will be sent to the
                Participant's email😊
              </Text>
              <Text>
                Regards,<br></br>UMS International Innovation Day 2024 Committee
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  