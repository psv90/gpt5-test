import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Klinika Holy – Twoja przestrzeń spokoju</title>
        <meta
          name="description"
          content="Klinika Holy – miejsce, gdzie odnajdziesz spokój, regenerację i holistyczną troskę o ciało, umysł i emocje."
        />
      </Head>

      <main className="font-sans bg-white text-gray-800">
        {/* HERO */}
        <section className="bg-pink-50 py-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-pink-900 mb-4"
          >
            Witamy w Klinice Holy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg mb-6"
          >
            Twoja przestrzeń spokoju, troski i prawdziwej regeneracji. W świecie, który ciągle pędzi, my tworzymy pauzę.
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="http://holyklinika.booksy.com/h/"
            className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full text-lg"
          >
            Zarezerwuj wizytę
          </motion.a>
        </section>

        {/* O NAS */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">O nas</h2>
          <p className="text-lg leading-relaxed text-center text-gray-700">
            W Klinice Holy dbamy o Ciebie z czułością i uważnością – nie tylko na poziomie ciała, ale też umysłu i emocji. Bez pośpiechu, bez sztywnych schematów, za to z ogromem troski. Chcemy, abyś poczuła się naprawdę dobrze.
          </p>
        </section>

        {/* WYRÓŻNIA NAS */}
        <section className="bg-pink-50 py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Co nas wyróżnia?</h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto text-lg">
            <div>🌿 Holistyczne podejście – łączymy nowoczesne terapie z zabiegami beauty</div>
            <div>⏳ Czas tylko dla Ciebie – słuchamy i dobieramy zabiegi indywidualnie</div>
            <div>🏡 Domowa atmosfera – miejsce stworzone z miłością</div>
            <div>✅ Sprawdzona jakość – pracujemy na produktach, którym ufamy</div>
            <div>🤝 Autentyczność – bez stresu, taśmowości i anonimowości</div>
          </div>
        </section>

        {/* DLA KOGO */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Dla kogo jesteśmy?</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Dla kobiet, które potrzebują oddechu od codzienności</li>
            <li>Szukają czegoś więcej niż “zabieg”</li>
            <li>Cenią autentyczność i spokój</li>
            <li>Chcą poczuć się zaopiekowane i dobrze we własnym ciele</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-pink-100 py-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">Zacznij swoją regenerację z nami</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="http://holyklinika.booksy.com/h/" className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full">Booksy</a>
            <a href="https://www.instagram.com/holyklinika/" className="bg-gray-800 hover:bg-black text-white py-3 px-6 rounded-full">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61551766116690" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full">Facebook</a>
          </div>
        </section>

        {/* MAPA + KONTAKT */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Kontakt</h2>
          <p className="text-lg text-center mb-4">
            📍 ul. Jarocka 61, 10-699 Olsztyn <br /> 📞 733-530-878
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2365.0633222842094!2d20.51137387657654!3d53.75898137233606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e2f4dfe3856e63%3A0x7f739d268ee4dc4a!2sJarocka%2061%2C%2010-699%20Olsztyn!5e0!3m2!1spl!2spl!4v1691246543210"
            width="100%"
            height="300"
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white py-6 text-center">
          <p>&copy; {new Date().getFullYear()} Klinika Holy. Wszystkie prawa zastrzeżone.</p>
        </footer>
      </main>
    </>
  );
}
