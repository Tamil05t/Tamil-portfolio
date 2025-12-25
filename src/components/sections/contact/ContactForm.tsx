import Input from '../../ui/Input'
import Textarea from '../../ui/Textarea'
import Button from '../../ui/Button'

export default function ContactForm() {
  return (
    <form className="contact-form">
      <Input label="Name" type="text" placeholder="Your name" />
      <Input label="Email" type="email" placeholder="your.email@example.com" />
      <Textarea label="Message" placeholder="Your message" rows={5} />
      <Button type="submit">Send Message</Button>
    </form>
  )
}
