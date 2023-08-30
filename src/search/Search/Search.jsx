import { Form, Formik } from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import CategoriesService from "../../results/service/categoriesService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Category from "../../results/components/Category/Category";
import Quote from "../../results/components/Quote/Quote";

const categoriesService = new CategoriesService();

const initialValues = {
  search: "",
};

const Search = () => {

    const params = useParams();
        
    const { data } = useQuery({
        queryKey: ["categories"],
        queryFn: () => categoriesService.getCategories(),
    });



  const navigate = useNavigate();

  const handleSubmit = (values) => {
    navigate(`/results/${values.search}`);
  };

  return (
    <section>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange
        validationSchema={Yup.object({
          search: Yup.string().required("Required"),
        })}
      >
        <Form className="flex flex-col gap-4 max-w-2xl mx-auto pt-12">
          <Input id="search" label="Search" />
          <Button type="submit">Search</Button>
        </Form>
      </Formik>
      <div>

      <div>
      {data && data.categories.map((quote) => <Quote quote={quote} />)}

      {/* <p>{console.log(data)}</p>
      <p>{console.log(data.categories)}</p> */}
      {/* <p>{console.log(data.categories)}</p> */}
      {/* <p>{data && data.categories.map((quote) => <Quote quote={quote} key={quote.quote} />)}</p> */}
      </div>

      </div>
    </section>
  );
};

export default Search;
