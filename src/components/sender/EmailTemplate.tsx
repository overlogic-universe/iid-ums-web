import { IconConstants } from "@/constants/icon-constants";
import { ImageConstants } from "@/constants/image-constants";
import IconImage from "@/assets/metadata/icon.png";
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
import { headerImages } from "../home/header/carouselImages";

interface EmailTemplateProps {
  leaderName?: string;
  email?: string;
  abstractUrl?: string;
  studentIdUrl?: string;
  descriptionUrl?: string;
}

export const EmailTemplate = ({
  leaderName,
  email,
  abstractUrl,
  studentIdUrl,
  descriptionUrl,
}: EmailTemplateProps) => {
  const previewText = `Thank you ${leaderName} for filling out the registration form`;
  const encodedMessage = encodeURIComponent(
    `Hii, I'm ${leaderName}\nHere is the proof of payment that I have made`
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
                src={`https://ums-iid.com/${headerImages.image2.src}`}
                alt="UMS International Innovation Day 2024"
                className="my-0 mx-auto w-full"
              />
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              Hii {leaderName},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thank you <strong>{leaderName}</strong> (
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
                href={`https://api.whatsapp.com/send?phone=6287846462090&text=${encodedMessage}`}
              >
                Verify Payment
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              See your document:{" "}
            </Text>
            <Link
              href={abstractUrl}
              className="text-blue-600 no-underline py-1"
            >
              Abstract
            </Link>
            <br></br>
            <Link
              href={studentIdUrl}
              className="text-blue-600 no-underline py-1"
            >
              Student ID
            </Link>
            <br></br>
            <Link
              href={descriptionUrl}
              className="text-blue-600 no-underline py-1"
            >
              Description
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
