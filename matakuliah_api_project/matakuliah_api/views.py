from pyramid.view import view_config
from pyramid.response import Response
from .models import Matakuliah
from sqlalchemy.exc import DBAPIError
import json

@view_config(route_name='get_all', request_method='GET', renderer='json')
def get_all_matkul(request):
    matkul = request.dbsession.query(Matakuliah).all()
    return [
        {
            'id': m.id,
            'kode_mk': m.kode_mk,
            'nama_mk': m.nama_mk,
            'sks': m.sks,
            'semester': m.semester
        } for m in matkul
    ]

@view_config(route_name='create', request_method='POST', renderer='json')
def create_matkul(request):
    data = request.json_body
    new_mk = Matakuliah(
        kode_mk=data['kode_mk'],
        nama_mk=data['nama_mk'],
        sks=data['sks'],
        semester=data['semester']
    )
    request.dbsession.add(new_mk)
    return {'message': 'Matakuliah created successfully'}

@view_config(route_name='update', request_method='PUT', renderer='json')
def update_matkul(request):
    id = int(request.matchdict['id'])
    data = request.json_body
    mk = request.dbsession.query(Matakuliah).filter(Matakuliah.id == id).first()
    if not mk:
        return Response(json_body={'error': 'Not found'}, status=404)
    mk.kode_mk = data['kode_mk']
    mk.nama_mk = data['nama_mk']
    mk.sks = data['sks']
    mk.semester = data['semester']
    return {'message': 'Matakuliah updated'}

@view_config(route_name='delete', request_method='DELETE', renderer='json')
def delete_matkul(request):
    id = int(request.matchdict['id'])
    mk = request.dbsession.query(Matakuliah).filter(Matakuliah.id == id).first()
    if not mk:
        return Response(json_body={'error': 'Not found'}, status=404)
    request.dbsession.delete(mk)
    return {'message': 'Matakuliah deleted'}