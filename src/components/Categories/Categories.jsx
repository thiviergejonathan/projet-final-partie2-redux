import CategoriesService from "../../results/service/categoriesService";
import { useQuery } from "@tanstack/react-query";
import Category from "../../results/components/Category/Category";

// !!!J'AI DU CHANGER LE CONTENU DU FICHIER INDEX.CSS POUR FAIRE FONCTIONNER TAILWIND!!! CHANGER LES COMMENTAIRES POUR REVENIR COMME AVANT

const categoriesService = new CategoriesService();

const Categories = () => {

    const { data } = useQuery({
        queryKey: ["categories"],
        queryFn: () => categoriesService.getCategories(),
    });

    return (
        <div>
            <h1 className="font-bold text-lg">Liste des catégories</h1>
            <section>
                <ul>
                    {data && data.categories.map((category) => <Category category={category} key={category.strCategory}/>)}
                </ul>
            </section>
        </div>
    );
};

export default Categories;
