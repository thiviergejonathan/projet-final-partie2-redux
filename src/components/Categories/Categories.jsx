import CategoriesService from "../../results/service/categoriesService";
import { useQuery } from "@tanstack/react-query";
import Category from "../../results/components/Category/Category";

const categoriesService = new CategoriesService();

const Categories = () => {

    const { data } = useQuery({
        queryKey: ["categories"],
        queryFn: () => categoriesService.getCategories(),
    });

    return (
        <div>
            <h1>Liste des catégories (Ceci est la page d'acceuil)</h1>
            <section>
                <ul>
                    {data && data.categories.map((category) => <Category category={category} key={category.strCategory}/>)}
                </ul>
            </section>
        </div>
    );
};

export default Categories;
