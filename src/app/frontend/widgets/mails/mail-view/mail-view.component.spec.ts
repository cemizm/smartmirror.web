import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailViewComponent } from './mail-view.component';
import {SharedModule} from "../../../../shared/shared.module";
import {MailService} from "../mail.service";
import {BaseService, MessagesService} from "@cemizm/smartmirror-shared";

describe('MailViewComponent', () => {
  let component: MailViewComponent;
  let fixture: ComponentFixture<MailViewComponent>;
  let mailService: MailService;
  let spy: any;

  let testMail = {
    "id": "15d75516a21136c3",
    "threadId": "15d75516a21136c3",
    "labelIds": [
      "IMPORTANT",
      "CATEGORY_PERSONAL",
      "INBOX"
    ],
    "snippet": "Test ist mit Ihrem Google-Konto verbunden Hallo Ke, Test kann jetzt auf Ihr Google-Konto kevinschima@gmail.com zugreifen. Test darf Folgendes: Ihre E-Mails und Einstellungen abrufen Sie sollten nur",
    "historyId": "507238",
    "internalDate": "1500911849000",
    "payload": {
      "partId": "",
      "mimeType": "multipart/alternative",
      "filename": "",
      "headers": [
        {
          "name": "Delivered-To",
          "value": "kevinschima@gmail.com"
        },
        {
          "name": "Received",
          "value": "by 10.182.111.230 with SMTP id il6csp3812140obb;        Mon, 24 Jul 2017 08:57:36 -0700 (PDT)"
        },
        {
          "name": "X-Received",
          "value": "by 10.129.173.36 with SMTP id l36mr13637900ywh.60.1500911856315;        Mon, 24 Jul 2017 08:57:36 -0700 (PDT)"
        },
        {
          "name": "ARC-Seal",
          "value": "i=1; a=rsa-sha256; t=1500911856; cv=none;        d=google.com; s=arc-20160816;        b=RyEk8IHu+FWtrWJNzccIwe7wWJ8FkdCig0SHKYFYoDM7hco8AW5pmhPxQRJDJQCp1d         bqsSGewrWYi7QTpWumybMKIZU79aEvIc5QeCxA1zWnBzdt2Iam3L7jFL1dMRe83cqzuk         00fD2N3No5FGft7uYz7iHrvJOkuAKvFzAIOxyAxFjcutXHUqckpX9c8cF1KXllVb5vs3         RPzlSnm49Us79wtd4QyJoCbPLJ/SS3lbel+ANSTlKsjbgZcwzSPxRUTXav5Vyx41whMe         JST0fgG4XDfSJPTU2/e5ZMlf7Z8460Es7CaRcBCH5eFWW0tOZJdrYJZExgy9JCdtBeg3         uDBQ=="
        },
        {
          "name": "ARC-Message-Signature",
          "value": "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=to:from:subject:message-id:feedback-id:date:mime-version         :dkim-signature:arc-authentication-results;        bh=Yz+JFl60g+2kY6xU/6Juf8A2uRV1tmyZJkvIJJbBT9s=;        b=FvCJv7eParX5hjHRycPPtFl16mm0JbtVznzndZj1jO9BkXc9p8AAht6lxqicQarxyu         hYeJzSRLFx4vJzgN5YPJhHDIUKp1MinIu2COO/w/mYV0rlAzHsLd6JWdcoKtYTWRqpKP         av18M88z50TJc2bbgN9cPYKaClMDLyIHvceMQv+rXTjFswKT0I1JMgteHhqfJLF/pQog         Vj+dUkgu3/39dCzdiKi4eE33CG46mtgr5lfS3MmQ0gM4QPWmcSux7/xHvpdBgMjHbnNh         F9Ypijm52qfgzqGhE+HrIdB+q10CYQDDec8kX9Ha36HtYJctmHWC4gKmtsgra3+bphnR         HtjQ=="
        },
        {
          "name": "ARC-Authentication-Results",
          "value": "i=1; mx.google.com;       dkim=pass header.i=@accounts.google.com header.b=Be55Xeo3;       spf=pass (google.com: domain of 37xh2wqgtc8o34-7u51eqss4a398.w44w1u.s420uby38sxy2qw2qy1.s42@gaia.bounces.google.com designates 2607:f8b0:4002:c05::245 as permitted sender) smtp.mailfrom=37xh2WQgTC8o34-7u51Eqss4A398.w44w1u.s420uBy38sxy2qw2qy1.s42@gaia.bounces.google.com;       dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=accounts.google.com"
        },
        {
          "name": "Return-Path",
          "value": "\u003c37xh2WQgTC8o34-7u51Eqss4A398.w44w1u.s420uBy38sxy2qw2qy1.s42@gaia.bounces.google.com\u003e"
        },
        {
          "name": "Received",
          "value": "from mail-yw0-x245.google.com (mail-yw0-x245.google.com. [2607:f8b0:4002:c05::245])        by mx.google.com with ESMTPS id t65si2619442ybi.47.2017.07.24.08.57.36        for \u003ckevinschima@gmail.com\u003e        (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128);        Mon, 24 Jul 2017 08:57:36 -0700 (PDT)"
        },
        {
          "name": "Received-SPF",
          "value": "pass (google.com: domain of 37xh2wqgtc8o34-7u51eqss4a398.w44w1u.s420uby38sxy2qw2qy1.s42@gaia.bounces.google.com designates 2607:f8b0:4002:c05::245 as permitted sender) client-ip=2607:f8b0:4002:c05::245;"
        },
        {
          "name": "Authentication-Results",
          "value": "mx.google.com;       dkim=pass header.i=@accounts.google.com header.b=Be55Xeo3;       spf=pass (google.com: domain of 37xh2wqgtc8o34-7u51eqss4a398.w44w1u.s420uby38sxy2qw2qy1.s42@gaia.bounces.google.com designates 2607:f8b0:4002:c05::245 as permitted sender) smtp.mailfrom=37xh2WQgTC8o34-7u51Eqss4A398.w44w1u.s420uBy38sxy2qw2qy1.s42@gaia.bounces.google.com;       dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=accounts.google.com"
        },
        {
          "name": "Received",
          "value": "by mail-yw0-x245.google.com with SMTP id i6so47079472ywb.11        for \u003ckevinschima@gmail.com\u003e; Mon, 24 Jul 2017 08:57:36 -0700 (PDT)"
        },
        {
          "name": "DKIM-Signature",
          "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=accounts.google.com; s=20161025;        h=mime-version:date:feedback-id:message-id:subject:from:to;        bh=Yz+JFl60g+2kY6xU/6Juf8A2uRV1tmyZJkvIJJbBT9s=;        b=Be55Xeo3yyagnroWovL9AW21d7Ga+4Ukpd/4BPT2YDmp/JSofg/f5JjE07Q8aMf7vb         ZT4+zSutDX6MjODuAdn7Cp81sVeTa4JQvxhz/L5UqkbgZYwFLnBK/BBCg4ukWuommBGp         muPS3PwoR80NJUpQL8XpMmYcIgixNWDEO4IvHkJYmo6d1cC8TiqK/0yemwAz4N4nCFVL         Za3wblyhSo/x0wA5TscSQs/hDR0hcxJaQMOOi/ue97DaSY4Vjcb8uJz+UcvEeM8sHUpO         rlD+LC0vY7BL4ER6UWr67emf03Yfvd5fVZsBmMVsU3MUB9XKFVJMfa4XLi3f3MR4fvdW         T1sA=="
        },
        {
          "name": "X-Google-DKIM-Signature",
          "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=1e100.net; s=20161025;        h=x-gm-message-state:mime-version:date:feedback-id:message-id:subject         :from:to;        bh=Yz+JFl60g+2kY6xU/6Juf8A2uRV1tmyZJkvIJJbBT9s=;        b=iv2UpgkZGdgDVlHGwZcMBhOhLzbhp50geDpj0gP9QuP7ptOS3vfAvuq+Ti0v75ipXT         Kg8bFewNlNZ6PZIHofVxPLl1Mghl9+fRO9RY4uqiXfGvTZuLIYZuzJfKAsGWtYRBvkPr         G4wP2YhgaaAY+NK/Ld64AHgVjd9QVY0zkrj8Bjvsz/jXvoWhKUqv+SQYOE/XPYNBXa54         O2zHyhOq8zbvU9M3ytgt66lZLPyucQDPd6qq3xP28ZuiaijTGcVGYVVMYJNA7W9hK3vg         l+m6LSLaBsPqh0NmC2wwA3riXfldxnxUParsump7bcVOZXDH75LuhE9RuXQX9tJiwqfy         S5qQ=="
        },
        {
          "name": "X-Gm-Message-State",
          "value": "AIVw113+AoGOBYeBLUwoqXQcSgjdR1SnejonBheHnyp/LEMQGpgYpZVI o/AM/6Jq4xvZ1wGZCRyDSnvsam2HRlXg"
        },
        {
          "name": "MIME-Version",
          "value": "1.0"
        },
        {
          "name": "X-Received",
          "value": "by 10.129.173.72 with SMTP id l8mr10736136ywk.78.1500911855959; Mon, 24 Jul 2017 08:57:35 -0700 (PDT)"
        },
        {
          "name": "Date",
          "value": "Mon, 24 Jul 2017 15:57:29 +0000 (UTC)"
        },
        {
          "name": "X-Notifications",
          "value": "XEAAAAAlMfq9tBmUaYodgJtv8JE4"
        },
        {
          "name": "X-Account-Notification-Type",
          "value": "127"
        },
        {
          "name": "Feedback-ID",
          "value": "127:account-notifier"
        },
        {
          "name": "Message-ID",
          "value": "\u003cp8Jzto-paKCA00xANbvj2Q@notifications.google.com\u003e"
        },
        {
          "name": "Subject",
          "value": "Test ist mit Ihrem Google-Konto verbunden"
        },
        {
          "name": "From",
          "value": "Google \u003cno-reply@accounts.google.com\u003e"
        },
        {
          "name": "To",
          "value": "kevinschima@gmail.com"
        },
        {
          "name": "Content-Type",
          "value": "multipart/alternative; boundary=\"f403045ea5aa0380fe0555124670\""
        }
      ],
      "body": {
        "size": 0
      },
      "parts": [
        {
          "partId": "0",
          "mimeType": "text/plain",
          "filename": "",
          "headers": [
            {
              "name": "Content-Type",
              "value": "text/plain; charset=\"UTF-8\"; format=flowed; delsp=yes"
            },
            {
              "name": "Content-Transfer-Encoding",
              "value": "base64"
            }
          ],
          "body": {
            "size": 1003,
            "data": "VGVzdCBpc3QgbWl0IElocmVtIEdvb2dsZS1Lb250byB2ZXJidW5kZW4NCg0KDQoNCkhhbGxvIEtlLA0KDQpUZXN0IGthbm4gamV0enQgYXVmIElociBHb29nbGUtS29udG8ga2V2aW5zY2hpbWFAZ21haWwuY29tIHp1Z3JlaWZlbi4NCg0KVGVzdCBkYXJmIEZvbGdlbmRlczoNCg0KICAgIC0gSWhyZSBFLU1haWxzIHVuZCBFaW5zdGVsbHVuZ2VuIGFicnVmZW4NCg0KDQpTaWUgc29sbHRlbiBudXIgQXBwcywgZGVuZW4gU2llIHZlcnRyYXVlbiwgZGllc2VuIFp1Z3JpZmYgZ2V3w6RocmVuLiBVbnRlciAgDQpNZWluDQpLb250byA8aHR0cHM6Ly9teWFjY291bnQuZ29vZ2xlLmNvbS9wZXJtaXNzaW9ucz4ga8O2bm5lbiBTaWUgamVkZXJ6ZWl0IGRpZQ0KbWl0IElocmVtIEtvbnRvIHZlcmtuw7xwZnRlbiBBcHBzIMO8YmVycHLDvGZlbiBvZGVyIGVudGZlcm5lbi4NCg0KSGllciBlcmZhaHJlbiBTaWUgbWVociBkYXLDvGJlcg0KPGh0dHBzOi8vc3VwcG9ydC5nb29nbGUuY29tL2FjY291bnRzL2Fuc3dlci8zNDY2NTIxPiwgd2FzIGRpZSBWZXJrbsO8cGZ1bmcNCnZvbiBBcHBzIG1pdCBJaHJlbSBLb250byBiZWRldXRldC4NCkRhcyBHb29nbGUgS29udGVuLVRlYW0NCg0KDQoNCkFuIGRpZXNlIEUtTWFpbC1BZHJlc3NlIGvDtm5uZW4ga2VpbmUgQW50d29ydGVuIGdlc2VuZGV0IHdlcmRlbi4gV2VpdGVyZQ0KSW5mb3JtYXRpb25lbiBmaW5kZW4gU2llIGluIGRlciBHb29nbGUgS29udGVuLUhpbGZlDQo8aHR0cHM6Ly9zdXBwb3J0Lmdvb2dsZS5jb20vYWNjb3VudHMvYW5zd2VyLzM0NjY1MjE-Lg0KDQoNCg0KTWl0IGRpZXNlciBTZXJ2aWNlbWl0dGVpbHVuZyBpbmZvcm1pZXJlbiB3aXIgU2llIMO8YmVyIHdpY2h0aWdlIMOEbmRlcnVuZ2VuDQpiZXrDvGdsaWNoIElocmVzIEdvb2dsZS1Qcm9kdWt0cyBvZGVyIC1Lb250b3MuDQoNCsKpIDIwMTcgR29vZ2xlIEluYy4sIDE2MDAgQW1waGl0aGVhdHJlIFBhcmt3YXksIE1vdW50YWluIFZpZXcsIENBIDk0MDQzLCBVU0ENCg=="
          }
        },
        {
          "partId": "1",
          "mimeType": "text/html",
          "filename": "",
          "headers": [
            {
              "name": "Content-Type",
              "value": "text/html; charset=\"UTF-8\""
            },
            {
              "name": "Content-Transfer-Encoding",
              "value": "quoted-printable"
            }
          ],
          "body": {
            "size": 4378,
            "data": "PGh0bWwgbGFuZz0iZGUiPjxoZWFkPjxtZXRhIG5hbWU9ImZvcm1hdC1kZXRlY3Rpb24iIGNvbnRlbnQ9ImRhdGU9bm8iPjxtZXRhIG5hbWU9ImZvcm1hdC1kZXRlY3Rpb24iIGNvbnRlbnQ9ImVtYWlsPW5vIj48L2hlYWQ-PGJvZHkgc3R5bGU9Im1hcmdpbjogMDsgcGFkZGluZzogMDsiIGJnY29sb3I9IiNGRkZGRkYiPjx0YWJsZSB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBzdHlsZT0ibWluLXdpZHRoOiAzNDhweDsiIGJvcmRlcj0iMCIgY2VsbHNwYWNpbmc9IjAiIGNlbGxwYWRkaW5nPSIwIj48dHIgaGVpZ2h0PSIzMnB4Ij48L3RyPjx0ciBhbGlnbj0iY2VudGVyIj48dGQgd2lkdGg9IjMycHgiPjwvdGQ-PHRkPjx0YWJsZSBib3JkZXI9IjAiIGNlbGxzcGFjaW5nPSIwIiBjZWxscGFkZGluZz0iMCIgc3R5bGU9Im1heC13aWR0aDogNjAwcHg7Ij48dHI-PHRkPjx0YWJsZSB3aWR0aD0iMTAwJSIgYm9yZGVyPSIwIiBjZWxsc3BhY2luZz0iMCIgY2VsbHBhZGRpbmc9IjAiPjx0cj48dGQgYWxpZ249ImxlZnQiPjxpbWcgd2lkdGg9IjkyIiBoZWlnaHQ9IjMyIiBzcmM9Imh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2FjY291bnRhbGVydHMvZW1haWwvZ29vZ2xlbG9nb19jb2xvcl8xODh4NjRkcC5wbmciIHN0eWxlPSJkaXNwbGF5OiBibG9jazsgd2lkdGg6IDkycHg7IGhlaWdodDogMzJweDsiPjwvdGQ-PHRkIGFsaWduPSJyaWdodCI-PGltZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHN0eWxlPSJkaXNwbGF5OiBibG9jazsgd2lkdGg6IDMycHg7IGhlaWdodDogMzJweDsiIHNyYz0iaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vYWNjb3VudGFsZXJ0cy9lbWFpbC9rZXlob2xlLnBuZyI-PC90ZD48L3RyPjwvdGFibGU-PC90ZD48L3RyPjx0ciBoZWlnaHQ9IjE2Ij48L3RyPjx0cj48dGQ-PHRhYmxlIGJnY29sb3I9IiM0MTg0RjMiIHdpZHRoPSIxMDAlIiBib3JkZXI9IjAiIGNlbGxzcGFjaW5nPSIwIiBjZWxscGFkZGluZz0iMCIgc3R5bGU9Im1pbi13aWR0aDogMzMycHg7IG1heC13aWR0aDogNjAwcHg7IGJvcmRlcjogMXB4IHNvbGlkICNGMEYwRjA7IGJvcmRlci1ib3R0b206IDA7IGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDsgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDsiPjx0cj48dGQgaGVpZ2h0PSI3MnB4IiBjb2xzcGFuPSIzIj48L3RkPjwvdHI-PHRyPjx0ZCB3aWR0aD0iMzJweCI-PC90ZD48dGQgc3R5bGU9ImZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjsgZm9udC1zaXplOiAyNHB4OyBjb2xvcjogI0ZGRkZGRjsgbGluZS1oZWlnaHQ6IDEuMjU7IG1pbi13aWR0aDogMzAwcHg7Ij5UZXN0IGlzdCBtaXQgSWhyZW0gR29vZ2xlLUtvbnRvIHZlcmJ1bmRlbjwvdGQ-PHRkIHdpZHRoPSIzMnB4Ij48L3RkPjwvdHI-PHRyPjx0ZCBoZWlnaHQ9IjE4cHgiIGNvbHNwYW49IjMiPjwvdGQ-PC90cj48L3RhYmxlPjwvdGQ-PC90cj48dHI-PHRkPjx0YWJsZSBiZ2NvbG9yPSIjRkFGQUZBIiB3aWR0aD0iMTAwJSIgYm9yZGVyPSIwIiBjZWxsc3BhY2luZz0iMCIgY2VsbHBhZGRpbmc9IjAiIHN0eWxlPSJtaW4td2lkdGg6IDMzMnB4OyBtYXgtd2lkdGg6IDYwMHB4OyBib3JkZXI6IDFweCBzb2xpZCAjRjBGMEYwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0MwQzBDMDsgYm9yZGVyLXRvcDogMDsgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4OyBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4OyI-PHRyIGhlaWdodD0iMTZweCI-PHRkIHdpZHRoPSIzMnB4IiByb3dzcGFuPSIzIj48L3RkPjx0ZD48L3RkPjx0ZCB3aWR0aD0iMzJweCIgcm93c3Bhbj0iMyI-PC90ZD48L3RyPjx0cj48dGQ-PHRhYmxlIHN0eWxlPSJtaW4td2lkdGg6IDMwMHB4OyIgYm9yZGVyPSIwIiBjZWxsc3BhY2luZz0iMCIgY2VsbHBhZGRpbmc9IjAiPjx0cj48dGQgc3R5bGU9ImZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzIwMjAyMDsgbGluZS1oZWlnaHQ6IDEuNTtwYWRkaW5nLWJvdHRvbTogNHB4OyI-SGFsbG8gS2UsPC90ZD48L3RyPjx0cj48dGQgc3R5bGU9ImZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzIwMjAyMDsgbGluZS1oZWlnaHQ6IDEuNTtwYWRkaW5nOiA0cHggMDsiPjxicj5UZXN0IGthbm4gamV0enQgYXVmIElociBHb29nbGUtS29udG8gPGE-a2V2aW5zY2hpbWFAZ21haWwuY29tPC9hPiB6dWdyZWlmZW4uPGJyPjxicj5UZXN0IGRhcmYgRm9sZ2VuZGVzOjx1bCBzdHlsZT0ibWFyZ2luOiAwOyI-PGxpPklocmUgRS1NYWlscyB1bmQgRWluc3RlbGx1bmdlbiBhYnJ1ZmVuPC9saT48L3VsPjxicj5TaWUgc29sbHRlbiBudXIgQXBwcywgZGVuZW4gU2llIHZlcnRyYXVlbiwgZGllc2VuIFp1Z3JpZmYgZ2V3w6RocmVuLiBVbnRlciA8YSBocmVmPSJodHRwczovL215YWNjb3VudC5nb29nbGUuY29tL3Blcm1pc3Npb25zIiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogIzQyODVGNDsiIHRhcmdldD0iX2JsYW5rIj5NZWluIEtvbnRvPC9hPiBrw7ZubmVuIFNpZSBqZWRlcnplaXQgZGllIG1pdCBJaHJlbSBLb250byB2ZXJrbsO8cGZ0ZW4gQXBwcyDDvGJlcnByw7xmZW4gb2RlciBlbnRmZXJuZW4uPGJyPjxicj48YSBocmVmPSJodHRwczovL3N1cHBvcnQuZ29vZ2xlLmNvbS9hY2NvdW50cy9hbnN3ZXIvMzQ2NjUyMSIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6ICM0Mjg1RjQ7IiB0YXJnZXQ9Il9ibGFuayI-SGllciBlcmZhaHJlbiBTaWUgbWVociBkYXLDvGJlcjwvYT4sIHdhcyBkaWUgVmVya27DvHBmdW5nIHZvbiBBcHBzIG1pdCBJaHJlbSBLb250byBiZWRldXRldC48L3RkPjwvdHI-PHRyPjx0ZCBzdHlsZT0iZm9udC1mYW1pbHk6IFJvYm90by1SZWd1bGFyLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmOyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjMjAyMDIwOyBsaW5lLWhlaWdodDogMS41OyBwYWRkaW5nLXRvcDogMjhweDsiPkRhcyBHb29nbGUgS29udGVuLVRlYW08L3RkPjwvdHI-PHRyIGhlaWdodD0iMTZweCI-PC90cj48dHI-PHRkPjx0YWJsZSBzdHlsZT0iZm9udC1mYW1pbHk6IFJvYm90by1SZWd1bGFyLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmOyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjQjlCOUI5OyBsaW5lLWhlaWdodDogMS41OyI-PHRyPjx0ZD5BbiBkaWVzZSBFLU1haWwtQWRyZXNzZSBrw7ZubmVuIGtlaW5lIEFudHdvcnRlbiBnZXNlbmRldCB3ZXJkZW4uIFdlaXRlcmUgSW5mb3JtYXRpb25lbiBmaW5kZW4gU2llIGluIGRlciA8YSBocmVmPSJodHRwczovL3N1cHBvcnQuZ29vZ2xlLmNvbS9hY2NvdW50cy9hbnN3ZXIvMzQ2NjUyMSIgZGF0YS1tZXRhLWtleT0iaGVscCIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6ICM0Mjg1RjQ7IiB0YXJnZXQ9Il9ibGFuayI-R29vZ2xlIEtvbnRlbi1IaWxmZTwvYT4uPC90ZD48L3RyPjwvdGFibGU-PC90ZD48L3RyPjwvdGFibGU-PC90ZD48L3RyPjx0ciBoZWlnaHQ9IjMycHgiPjwvdHI-PC90YWJsZT48L3RkPjwvdHI-PHRyIGhlaWdodD0iMTYiPjwvdHI-PHRyPjx0ZCBzdHlsZT0ibWF4LXdpZHRoOiA2MDBweDsgZm9udC1mYW1pbHk6IFJvYm90by1SZWd1bGFyLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmOyBmb250LXNpemU6IDEwcHg7IGNvbG9yOiAjQkNCQ0JDOyBsaW5lLWhlaWdodDogMS41OyI-PHRyPjx0ZD48dGFibGUgc3R5bGU9ImZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxMHB4OyBjb2xvcjogIzY2NjY2NjsgbGluZS1oZWlnaHQ6IDE4cHg7IHBhZGRpbmctYm90dG9tOiAxMHB4Ij48dHI-PHRkPk1pdCBkaWVzZXIgU2VydmljZW1pdHRlaWx1bmcgaW5mb3JtaWVyZW4gd2lyIFNpZSDDvGJlciB3aWNodGlnZSDDhG5kZXJ1bmdlbiBiZXrDvGdsaWNoIElocmVzIEdvb2dsZS1Qcm9kdWt0cyBvZGVyIC1Lb250b3MuPC90ZD48L3RyPjx0ciBoZWlnaHQ9IjZweCI-PC90cj48dHI-PHRkPjxkaXYgc3R5bGU9ImRpcmVjdGlvbjogbHRyOyB0ZXh0LWFsaWduOiBsZWZ0Ij4mY29weTsgMjAxNyBHb29nbGUgSW5jLiwgMTYwMCBBbXBoaXRoZWF0cmUgUGFya3dheSwgTW91bnRhaW4gVmlldywgQ0EgOTQwNDMsIFVTQTwvZGl2PjwvdGQ-PC90cj48L3RhYmxlPjwvdGQ-PC90cj48L3RkPjwvdHI-PC90YWJsZT48L3RkPjx0ZCB3aWR0aD0iMzJweCI-PC90ZD48L3RyPjx0ciBoZWlnaHQ9IjMycHgiPjwvdHI-PC90YWJsZT48L2JvZHk-PC9odG1sPg=="
          }
        }
      ]
    },
    "sizeEstimate": 11631
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailViewComponent ],
      imports: [SharedModule],
      providers: [MailService, MessagesService, BaseService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailViewComponent);
    component = fixture.componentInstance;
    mailService = fixture.debugElement.injector.get(MailService);
    spy = spyOn(mailService, "getMails")
      .and.returnValue(Promise.resolve(testMail));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
