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
  email: string;
  payment: string;
}

export const EmailTemplate = ({ name, email, payment }: EmailTemplateProps) => {
  const previewText = `Thank you ${name} for filling out the registration form`;
  const encodedMessage = encodeURIComponent(
    `Hii, I'm ${name}\nHere is the proof of payment that I have made \n ${payment}`
  );

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
              Hii {name},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thank you <strong>{name}</strong> (
              <Link
                href={`mailto:${email}`}
                className="text-blue-600 no-underline"
              >
                {email}
              </Link>
              ) for filling out the registration form, next step please verify
              payment via the contact below
            </Text>
            <Section></Section>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="flex-1 bg-blue-700 rounded-2xl text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={`https://api.whatsapp.com/send?phone=6281915689154&text=${encodedMessage}`}
              >
                Verify Payment
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              See your payment information:{" "}
            </Text>
              <Link
                href={payment}
                className="text-blue-600 no-underline py-1"
              >
                Payment Information
              </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
