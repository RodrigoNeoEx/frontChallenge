import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateCeps }  from "../redux/slices/cepSlice";


const useHydrateCeps = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      const enderecosSalvos = JSON.parse(localStorage.getItem('enderecosSalvos') || '[]');
      if (enderecosSalvos.length > 0) {
          dispatch(hydrateCeps(enderecosSalvos));
      }
  }, [dispatch]);
}

export default useHydrateCeps;
