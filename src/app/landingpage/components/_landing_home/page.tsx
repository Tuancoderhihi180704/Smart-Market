
import Header from "@/app/landingpage/components/_landing_home/_home/Header";
import Main from "@/app/landingpage/components/_landing_home/_home/Main";
import Footer from "@/app/landingpage/components/_landing_home/_home/Footer";
import styles from "./_home/landing.module.scss";


export default function Home() {
  return (
     <div className={styles.container} >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
