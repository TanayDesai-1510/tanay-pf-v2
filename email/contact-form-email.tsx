import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
  message: string
  senderEmail: string
  senderName: string
}

export default function ContactFormEmail({ message, senderEmail, senderName }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-200 text-black">
          <Container>
            <Section className="my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                {senderName
                  ? `Message from ${senderName}`
                  : `Message from ${senderEmail}`}
              </Heading>
              <Text>{message}</Text>
              <Hr />
              {senderName ? <Text>Name: {senderName}</Text> : null}
              <Text>Email: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
