type WorkCardProp = {
  srcSet: string;
  src: string;
  width: string;
  height: string;
  alt: string;
  description: string;
}

const WorkCard = ({ alt, description, ...props }: WorkCardProp) => {
  return (
    <div>
      <img
        {...props}
        alt={alt} />
        <p>{description}</p>
    </div>
  )
}

const data = [{
  id: '1',
  srcSet: 'logo.png, logo-2x.png 2x',
  src: 'logo.png',
  height: '320',
  width: '320',
  alt: 'MDN Web Docs logo',
  description: 'This is a description'
}]

export const FeaturedWorks = () => {
  return (
    <div>
      <h3>Highlights</h3>
      <div>
        {data.map((item) => <WorkCard key={item.id} {...item} />)}
      </div>
    </div>
  )
}