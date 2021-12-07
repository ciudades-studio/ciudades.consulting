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
      <div className={styles["form"]}>
        <h2 className={styles["form-title"]}>Contact Us</h2>
      </div>
    </div>
  );
}

const ContactUs = ({ contactUsTtitle, contactUsSubtitle }: IContactUs,) => {
  return (
    <div className={styles["contactus-container"]}>
      <TitleContainer contactUsTtitle={contactUsTtitle} contactUsSubtitle={contactUsSubtitle} />
      <ContactForm />
    </div>
  );
}

export default ContactUs;