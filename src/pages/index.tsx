import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.site_name}`}
          description="E-commerce mockup website for SnapMart Interview"
        />
      }
      setIsCartOpen={() => {}}
    >
      <div className="container mx-auto flex">
        <div>Content</div>
        <div>Cart</div>
      </div>
    </Main>
  );
};

export default Index;
