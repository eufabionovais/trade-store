import React, { Fragment, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loading from '../components/Loading';

import ScrollTop from "./scrollTop";

const HomePage = lazy(() => import('pages/Home'))
const CadastroPage = lazy(() => import('pages/Cadastro'))
const ProdutoPage = lazy(() => import('pages/Produto'))
const CategoriasPage = lazy(() => import('pages/Categorias'))
const MinhaConta = lazy(() => import('pages/MinhaConta'))
const DadosPessoais = lazy(() => import('pages/DadosPessoais'))
const Enderecos = lazy(() => import('pages/Enderecos'))
const Pedidos = lazy(() => import('pages/Pedidos'))
const PedidosDetalhes = lazy(() => import('pages/PedidosDetalhes'))
const Favoritos = lazy(() => import('pages/Favoritos'))
const Carrinho = lazy(() => import('pages/Carrinho'))
const SobreNos = lazy(() => import('pages/SobreNos'))
const TermosCondicoesVendedor = lazy(() => import('pages/TermosCondicoesVendedor'))
const TermosCondicoesComprador = lazy(() => import('pages/TermosCondicoesComprador'))
const PoliticaPrivacidadeSeguranca = lazy(() => import('pages/PoliticaPrivacidadeSeguranca'))
const PoliticaEntrega = lazy(() => import('pages/PoliticaEntrega'))
const PoliticaTrocasReembolsos = lazy(() => import('pages/PoliticaTrocasReembolsos'))
const FaleConosco = lazy(() => import('pages/FaleConosco'))
const TrabalheConosco = lazy(() => import('pages/TrabalheConosco'))

const AppRoutes = () => (
  <Fragment>

    <Suspense fallback={<Loading />}>
      <ScrollTop />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/produto" element={<ProdutoPage />} />
        <Route path="/categorias" element={<CategoriasPage />} />
        <Route path="/minha-conta" element={<MinhaConta />} />
        <Route path="/dados-pessoais" element={<DadosPessoais />} />
        <Route path="/enderecos" element={<Enderecos />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/pedidos/:id" element={<PedidosDetalhes />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/termos-condicoes-vendedor" element={<TermosCondicoesVendedor />} />
        <Route path="/termos-condicoes-comprador" element={<TermosCondicoesComprador />} />
        <Route path="/politica-privacidade-seguranca" element={<PoliticaPrivacidadeSeguranca />} />
        <Route path="/politica-entrega" element={<PoliticaEntrega />} />
        <Route path="/politica-trocas-reembolsos" element={<PoliticaTrocasReembolsos />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
      </Routes>
    </Suspense>

  </Fragment>
)

export default AppRoutes;
