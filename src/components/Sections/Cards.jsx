import Card from "../Cards/Card";

const Cards = () => {
  return (
    <div className="cards my-6 py-6">
      <div className="container mx-auto flex">
        {[1,2,3].map((card, index) => <Card key={index} />)}
      </div>
    </div>
  );
};

export default Cards;
