import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';

function Cart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b"></ul>

      <div className="mt-6 space-x-2">
        <Button to={'/order/new'} type="primary">
          Order Pizzas
        </Button>

        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
