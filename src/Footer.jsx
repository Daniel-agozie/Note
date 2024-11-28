

const Footer = () => {
  const day = new Date();
  const year = day.getFullYear();
  return (
    <div className="flex justify-center">
      <div className="fixed bottom-0 font-oswald italic text-xs">
      copyright © {year}
      </div>
    </div>
  )
}

export default Footer