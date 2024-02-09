import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './breadcrumb.scoped.scss';

function handleClick(event) {
  event.preventDefault();
  console.info('Item clicado');
}

export default function BreadcrumbsComponent() {
  return (
    <div className="container" onClick={handleClick}>
        <div className="row">
            <div className="col-12">
                <Breadcrumbs separator="/" aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Produtos na Home
                    </Link>

                    <Link underline="hover" color="inherit" href="/">
                        Os mais vendidos
                    </Link>

                    <Typography color="text.primary">Hastes Flexíveis, Cotonetes, 75 Unidades</Typography>
                </Breadcrumbs>

            </div>
        </div>
    </div>

  );
}