
import Header from "@/app/landingpage/components/Header";
import Main from "@/app/landingpage/components/Main";
import Footer from "@/app/landingpage/components/Footer";
import styles from "@/app/landingpage/components/landing.module.scss";


export default function Home() {
  return (
     <div className={styles.container} >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
