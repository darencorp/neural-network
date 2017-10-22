from pyramid.config import Configurator
from webassets import Bundle


def include_jsx(config):

    minjsx = Bundle(
        'jsx/app.jsx',
        'jsx/qwe.jsx',

        output='jsx/generated.jsx'
    )

    config.add_webasset('jsx', minjsx)

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    config = Configurator(settings=settings)
    # config.include('pyramid_jinja2')
    config.add_mako_renderer('.html')
    config.include('.models')
    config.include('.routes')
    config.include(include_jsx)
    config.scan()
    return config.make_wsgi_app()
