import Image from 'next/image';

const label = (obj, lang) => obj?.[lang] ?? obj[Object.keys(obj).shift()];
const imageInfo = (event, type) => {
  const {
    base
  } = event.image;

  const {
    size,
    filename
  } = event.image.variants.find(v => v.type === type);

  return {
    src: base + filename,
    width: size.width,
    height: size.height
  }
}

function EventItem({ event, locale }) {
  const image = event.image ? imageInfo(event, 'thumbnail') : null;
  return <div>
    {image ? (
      <Image
        className="img-thumbnail"
        alt={label(event.title, locale)}
        src={image.src}
        width={image.width}
        height={image.height}
      />
    ) : null}
    <strong>{label(event.title, locale)}</strong>
    <div>
      <span>{label(event.dateRange, locale)}</span>
    </div>
  </div>
}

export default EventItem;