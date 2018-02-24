def includeme(config):
    # config.add_static_view(name='static', path='react_pyramid/static')
    config.add_route('home', '/')
    config.add_route('preform', '/preform')
    config.add_route('test', '/test')
    config.add_route('get_test_set', '/get_test_set')