import { Routes } from '@angular/router';
import { PageComponent } from './page/page.components';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {path : "", component: PageComponent},
    {path : "confirmation", component: ConfirmationComponent},
    {path : "legal", component: LegalNoticeComponent},
    {path : "privacy", component: PrivacyPolicyComponent},
];
