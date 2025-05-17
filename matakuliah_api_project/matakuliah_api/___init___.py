from pyramid.config import Configurator
from sqlalchemy import engine_from_config
from .models import Base

def main(global_config, **settings):
    config = Configurator(settings=settings)
    engine = engine_from_config(settings, 'sqlalchemy.')
    from sqlalchemy.orm import sessionmaker
    config.registry['dbsession_factory'] = sessionmaker(bind=engine)

    def dbsession(request):
        session = config.registry['dbsession_factory']()
        request.add_finished_callback(lambda request: session.close())
        return session

    config.add_request_method(dbsession, 'dbsession', reify=True)
    config.include('.routes')
    config.scan()
    return config.make_wsgi_app()