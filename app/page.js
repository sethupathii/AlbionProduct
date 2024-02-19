import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Albion Products</h1>
      <Link href={'/users'}>
        Go to Products
      </Link>
    </div>

  );
}
