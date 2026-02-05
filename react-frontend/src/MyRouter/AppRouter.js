import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

import SingleInvoicesPage from "../components/app_components/InvoicesPage/SingleInvoicesPage";
import InvoiceProjectLayoutPage from "../components/app_components/InvoicesPage/InvoiceProjectLayoutPage";
import SingleProductsPage from "../components/app_components/ProductsPage/SingleProductsPage";
import ProductProjectLayoutPage from "../components/app_components/ProductsPage/ProductProjectLayoutPage";
import SingleSuppliersPage from "../components/app_components/SuppliersPage/SingleSuppliersPage";
import SupplierProjectLayoutPage from "../components/app_components/SuppliersPage/SupplierProjectLayoutPage";
import SingleBuyersPage from "../components/app_components/BuyersPage/SingleBuyersPage";
import BuyerProjectLayoutPage from "../components/app_components/BuyersPage/BuyerProjectLayoutPage";
import SingleShippingPage from "../components/app_components/ShippingPage/SingleShippingPage";
import ShippingProjectLayoutPage from "../components/app_components/ShippingPage/ShippingProjectLayoutPage";
import SingleMeasurementsPage from "../components/app_components/MeasurementsPage/SingleMeasurementsPage";
import MeasurementProjectLayoutPage from "../components/app_components/MeasurementsPage/MeasurementProjectLayoutPage";
import SingleIdentifyTypePage from "../components/app_components/IdentifyTypePage/SingleIdentifyTypePage";
import IdentifyTypeProjectLayoutPage from "../components/app_components/IdentifyTypePage/IdentifyTypeProjectLayoutPage";
import SingleEInvoiceTypesPage from "../components/app_components/EInvoiceTypesPage/SingleEInvoiceTypesPage";
import EInvoiceTypeProjectLayoutPage from "../components/app_components/EInvoiceTypesPage/EInvoiceTypeProjectLayoutPage";
import SingleClassificationCodesPage from "../components/app_components/ClassificationCodesPage/SingleClassificationCodesPage";
import ClassificationCodeProjectLayoutPage from "../components/app_components/ClassificationCodesPage/ClassificationCodeProjectLayoutPage";
import SinglePaymentModesPage from "../components/app_components/PaymentModesPage/SinglePaymentModesPage";
import PaymentModeProjectLayoutPage from "../components/app_components/PaymentModesPage/PaymentModeProjectLayoutPage";
import SingleFrequencyOfBillingPage from "../components/app_components/FrequencyOfBillingPage/SingleFrequencyOfBillingPage";
import FrequencyOfBillingProjectLayoutPage from "../components/app_components/FrequencyOfBillingPage/FrequencyOfBillingProjectLayoutPage";
import SingleCurrencyCodesPage from "../components/app_components/CurrencyCodesPage/SingleCurrencyCodesPage";
import CurrencyCodeProjectLayoutPage from "../components/app_components/CurrencyCodesPage/CurrencyCodeProjectLayoutPage";
import SinglePhoneNumberPrefixPage from "../components/app_components/PhoneNumberPrefixPage/SinglePhoneNumberPrefixPage";
import PhoneNumberPrefixProjectLayoutPage from "../components/app_components/PhoneNumberPrefixPage/PhoneNumberPrefixProjectLayoutPage";
import SingleStateCodesPage from "../components/app_components/StateCodesPage/SingleStateCodesPage";
import StateCodeProjectLayoutPage from "../components/app_components/StateCodesPage/StateCodeProjectLayoutPage";
import SingleCountryCodesPage from "../components/app_components/CountryCodesPage/SingleCountryCodesPage";
import CountryCodeProjectLayoutPage from "../components/app_components/CountryCodesPage/CountryCodeProjectLayoutPage";
import SingleTaxTypesPage from "../components/app_components/TaxTypesPage/SingleTaxTypesPage";
import TaxTypeProjectLayoutPage from "../components/app_components/TaxTypesPage/TaxTypeProjectLayoutPage";
import SingleTeamsPage from "../components/app_components/TeamsPage/SingleTeamsPage";
import TeamProjectLayoutPage from "../components/app_components/TeamsPage/TeamProjectLayoutPage";
//  ~cb-add-import~

const AppRouter = () => {
  return (
    <Routes>
      {/* ~cb-add-unprotected-route~ */}
      <Route element={<ProtectedRoute redirectPath={"/login"} />}>
        
<Route path="/invoices/:singleInvoicesId" exact element={<SingleInvoicesPage />} />
<Route path="/invoices" exact element={<InvoiceProjectLayoutPage />} />
<Route path="/products/:singleProductsId" exact element={<SingleProductsPage />} />
<Route path="/products" exact element={<ProductProjectLayoutPage />} />
<Route path="/suppliers/:singleSuppliersId" exact element={<SingleSuppliersPage />} />
<Route path="/suppliers" exact element={<SupplierProjectLayoutPage />} />
<Route path="/buyers/:singleBuyersId" exact element={<SingleBuyersPage />} />
<Route path="/buyers" exact element={<BuyerProjectLayoutPage />} />
<Route path="/shipping/:singleShippingId" exact element={<SingleShippingPage />} />
<Route path="/shipping" exact element={<ShippingProjectLayoutPage />} />
<Route path="/measurements/:singleMeasurementsId" exact element={<SingleMeasurementsPage />} />
<Route path="/measurements" exact element={<MeasurementProjectLayoutPage />} />
<Route path="/identifyType/:singleIdentifyTypeId" exact element={<SingleIdentifyTypePage />} />
<Route path="/identifyType" exact element={<IdentifyTypeProjectLayoutPage />} />
<Route path="/eInvoiceTypes/:singleEInvoiceTypesId" exact element={<SingleEInvoiceTypesPage />} />
<Route path="/eInvoiceTypes" exact element={<EInvoiceTypeProjectLayoutPage />} />
<Route path="/classificationCodes/:singleClassificationCodesId" exact element={<SingleClassificationCodesPage />} />
<Route path="/classificationCodes" exact element={<ClassificationCodeProjectLayoutPage />} />
<Route path="/paymentModes/:singlePaymentModesId" exact element={<SinglePaymentModesPage />} />
<Route path="/paymentModes" exact element={<PaymentModeProjectLayoutPage />} />
<Route path="/frequencyOfBilling/:singleFrequencyOfBillingId" exact element={<SingleFrequencyOfBillingPage />} />
<Route path="/frequencyOfBilling" exact element={<FrequencyOfBillingProjectLayoutPage />} />
<Route path="/currencyCodes/:singleCurrencyCodesId" exact element={<SingleCurrencyCodesPage />} />
<Route path="/currencyCodes" exact element={<CurrencyCodeProjectLayoutPage />} />
<Route path="/phoneNumberPrefix/:singlePhoneNumberPrefixId" exact element={<SinglePhoneNumberPrefixPage />} />
<Route path="/phoneNumberPrefix" exact element={<PhoneNumberPrefixProjectLayoutPage />} />
<Route path="/stateCodes/:singleStateCodesId" exact element={<SingleStateCodesPage />} />
<Route path="/stateCodes" exact element={<StateCodeProjectLayoutPage />} />
<Route path="/countryCodes/:singleCountryCodesId" exact element={<SingleCountryCodesPage />} />
<Route path="/countryCodes" exact element={<CountryCodeProjectLayoutPage />} />
<Route path="/taxTypes/:singleTaxTypesId" exact element={<SingleTaxTypesPage />} />
<Route path="/taxTypes" exact element={<TaxTypeProjectLayoutPage />} />
<Route path="/teams/:singleTeamsId" exact element={<SingleTeamsPage />} />
<Route path="/teams" exact element={<TeamProjectLayoutPage />} />
        {/* ~cb-add-protected-route~ */}
      </Route>
    </Routes>
  );
};

const mapState = (state) => {
  const { isLoggedIn } = state.auth;
  return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(AppRouter);
