import Card from '../components/Card';
import poster_default from '../assets/card_img.jpg';

function Items() {
  return (
    <section className="grid">
      <Card
        id="1"
        title="Card Title"
        poster={poster_default}
        alt="poster"
        content="Foguete da Space X vai se chocar com a Lua em Março Rapahel Veiga perde
        o Mundial e a namorada Padre sai de Paróquia por mandar vídeo erótico em
        grupo"
      />

      <Card
        id="2"
        title="Card Title"
        poster={poster_default}
        alt="poster"
        content="Foguete da Space X vai se chocar com a Lua em Março Rapahel Veiga perde
        o Mundial e a namorada Padre sai de Paróquia por mandar vídeo erótico em
        grupo"
      />

      <Card
        id="3"
        title="Card Title"
        poster={poster_default}
        alt="poster"
        content="Foguete da Space X vai se chocar com a Lua em Março Rapahel Veiga perde
        o Mundial e a namorada Padre sai de Paróquia por mandar vídeo erótico em
        grupo"
      />
    </section>
  );
}

export default Items;
