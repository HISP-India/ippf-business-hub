

## Update MA/CP Dropdown with Official IPPF Data

### Summary
Replace the current hardcoded sample region and member association data in the Dashboard with the official IPPF MA/CP list from the uploaded Excel file.

### What Changes

**Region names updated** (old -> new):
- AR -> South Asia
- AF -> Africa
- SAR -> Americas & Caribbean
- AWR -> Arab World
- ESEAOR -> East & SE Asia & Oceania
- EN -> Europe & Central Asia

**Member Associations updated** to use the full official list (60+ organizations across 6 regions).

### Data from the Excel

| Region | Organizations |
|--------|--------------|
| South Asia (7) | Afghan Family Guidance Association, Family Planning Association of Bangladesh, Respect Educate Nurture and Empower Women, Family Planning Association of India, Society for Health Education, Family Planning Association of Nepal, Family Planning Association of Sri Lanka |
| Africa (17) | Association Beninoise pour la Promotion de la Famille, Association Burkinabe pour le Bien-Etre Familial, Association Burundaise pour le Bien-Etre Familial, Cameroon National Association for Family Welfare, Family Guidance Association of Ethiopia, Planned Parenthood Association of Ghana, Family Planning Association of Kenya, Family Planning Association of Malawi, Planned Parenthood Federation of Nigeria, Association Rwandaise pour le Bien-Etre Familial, Association Senegalaise pour le Bien-Etre Familial, Family Planning Association of South Africa, Sudan Family Planning Association, Uzazi na Malezi Bora Tanzania, Reproductive Health Uganda, Planned Parenthood Association of Zambia, Zimbabwe National Family Planning Council |
| Americas & Caribbean (11) | Fundacion para Estudio e Investigacion de la Mujer, Bahamas Family Planning Association, Barbados Family Planning Association, Belize Family Life Association, Centro de Investigacion Educacion y Servicios, Sociedade Civil Bem-Estar Familiar no Brasil, Asociacion Chilena de Proteccion de la Familia, Asociacion Probienestar de la Familia Colombiana, Fundacion Mexicana para la Planeacion Familiar, Instituto Peruano de Paternidad Responsable, Planned Parenthood Federation of America |
| Arab World (7) | Egyptian Family Planning Association, Jordan Association for Family Planning and Protection, Lebanese Family Planning Association for Development and Empowerment, Association Marocaine de Planification Familiale, Palestinian Family Planning and Protection Association, Association Tunisienne de la Sante de la Reproduction, Yemeni Family Care Association |
| East & SE Asia & Oceania (8) | Sexual Health Quarters, Reproductive Health Association of Cambodia, China Family Planning Association, Indonesian Planned Parenthood Association, Japanese Organization for International Cooperation in Family Planning, Family Planning Organization of the Philippines, Population and Development Association, Vietnam Family Planning Association |
| Europe & Central Asia (10) | Albanian Family Planning Association, Armenian Family Planning Association, Mouvement Francais pour le Planning Familial, pro familia Deutsche Gesellschaft fur Familienplanung, Irish Family Planning Association, Associazione Italiana per l'Educazione Demografica, Rutgers, Federacion de Planificacion Familiar Estatal, Swedish Association for Sexuality Education, Brook |

### Technical Details

**File modified:** `src/pages/Dashboard.tsx`

- Replace the `regionData` constant (lines 18-25) with the full official dataset using the proper region names as keys and the complete list of member associations as values.
- No other files or components need changes -- the Select dropdowns and all downstream logic already work with the `regionData` object dynamically.

