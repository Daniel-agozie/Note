

const Footer = () => {
  const day = new Date();
  const year = day.getFullYear();
  return (
    <div className="flex justify-center">
      <div className="absolute bottom-0 font-montserrat italic text-xs">
      copyright © {year}
      </div>
    </div>
  )
}

export default Footer