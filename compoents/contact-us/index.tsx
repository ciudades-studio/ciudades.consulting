import { IContactUs } from '../../fixtures/contact-us.fixture'
import styles from './contact-us.module.scss'

export const TitleContainer = ({ contactUsTtitle, contactUsSubtitle }: IContactUs) => {
  return (
    <div className={styles["title-container"]}>
      <div className={styles["text-title-container"]}>
        <h2 className={styles["title"]}>{contactUsTtitle}</h2>
        <h3 className={styles["subtitle"]}>{contactUsSubtitle}</h3>
      </div>
    </div>
  );
}

export const ContactForm = () => {
  return (
    <div className={styles["form-container"]}>
      <h2 className={styles["form-title"]}>Contact Us</h2>
      <form className={styles["form"]}>
        <label className={styles["form-label"]} htmlFor="/">Name</label>
        <input className={styles["form-input"]} type="text" placeholder="Enter your full name" />
        <label className={styles["form-label"]} htmlFor="/">Email</label>
        <input className={styles["form-input"]} type="text" placeholder="Enter your email" />
        <label className={styles["form-label"]} htmlFor="/">Message</label>
        <textarea className={styles["form-input"]} placeholder="Tell us about your project" />
        <button className={styles["form-button"]}>Send Message</button>
      </form>
    </div>
  );
}

const ContactUs = ({ contactUsTtitle, contactUsSubtitle }: IContactUs) => {
  return (
    <div className={styles["contactus-container"]}>
      <TitleContainer 
        contactUsTtitle={contactUsTtitle} 
        contactUsSubtitle={contactUsSubtitle} 
      />
      <ContactForm />
    </div>
  );
}

export default ContactUs;