type CompayCardProp = {
  srcSet: string;
  src: string;
  width: string;
  height: string;
  alt: string;
}

const CompanyCard = ({ alt, ...props }: CompayCardProp) => {
  return (

    <figure>
      <img
        {...props}
        alt={alt} />
      <figcaption>{alt}</figcaption>
    </figure>
  )
}

const data = [{
  id: '1',
  srcSet: 'logo.png, logo-2x.png 2x',
  src: 'logo.png',
  height: '320',
  width: '320',
  alt: 'MDN Web Docs logo',
}]

export const WorkedWith = () => {
  return (
    <div>
      <h3>Worked with</h3>
      <div>
        {data.map((item) => <CompanyCard key={item.id} {...item} />)}
      </div>
    </div>
  )
}