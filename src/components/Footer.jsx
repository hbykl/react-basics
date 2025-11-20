export default function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 10
  const closeHour = 20
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer>
      {
        isOpen ? (
          <p>
            saat {closeHour}'a kadar açığız.
          </p>
        ) :
          (
            <p>
              Şu anda kapalıyız. Saat {openHour} 'da görüşmek üzere
            </p>
          )
      }
    </footer>
  )

}