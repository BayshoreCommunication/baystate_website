"use client";

export default function ContactMap() {
  return (
    <section className="bg-white py-6 md:pt-6 md:pb-0">
      <div className="max-w-full mx-auto px-4 md:px-0">
        <div className=" overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56325.45817153707!2d-82.56569663770745!3d28.075135431709082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c06475d444f1%3A0xe646112f29b033ee!2sTampa%2C%20FL%2033624%2C%20USA!5e0!3m2!1sen!2sbd!4v1775366686882!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
