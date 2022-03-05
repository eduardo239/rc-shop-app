function ItemStorage({ item, setSelectedStorage }) {
  return (
    <>
      <h5>Armazenamento</h5>
      <div className="item-wrapper__info-color mb-20">
        {item?.storages?.length > 0 ? (
          item.storages.map((storage) => (
            <button
              className="btn-storage-select"
              key={storage}
              onClick={() => setSelectedStorage(storage)}
            >
              {storage} GB
            </button>
          ))
        ) : (
          <p>Não há armazéns cadastrados</p>
        )}
      </div>
    </>
  );
}

export default ItemStorage;
